#!/usr/bin/env python3
"""
Sincroniza o Audiobookshelf com os arquivos estaticos do GitHub Pages.

Variaveis de ambiente obrigatorias:
  ABS_URL       Ex.: http://192.168.0.10:13378
  ABS_API_KEY   API key criada no Audiobookshelf

Variavel opcional:
  ABS_LIBRARY_ID  ID da biblioteca. Se omitida, usa a primeira biblioteca de livros.
"""

from __future__ import annotations

import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
COVERS_DIR = ROOT / "capas"


def env(name: str, required: bool = True) -> str:
    value = os.environ.get(name, "").strip()
    if required and not value:
        raise SystemExit(f"Defina a variavel de ambiente {name}.")
    return value


ABS_URL = env("ABS_URL").rstrip("/")
ABS_API_KEY = env("ABS_API_KEY")
ABS_LIBRARY_ID = env("ABS_LIBRARY_ID", required=False)


def request_json(path: str, params: dict[str, Any] | None = None) -> dict[str, Any]:
    url = f"{ABS_URL}{path}"
    if params:
        url = f"{url}?{urlencode(params)}"

    request = Request(url, headers={"Authorization": f"Bearer {ABS_API_KEY}"})
    try:
        with urlopen(request, timeout=40) as response:
            return json.loads(response.read().decode("utf-8"))
    except HTTPError as error:
        raise SystemExit(f"Erro {error.code} ao acessar {url}") from error
    except URLError as error:
        raise SystemExit(f"Nao consegui conectar ao Audiobookshelf em {ABS_URL}: {error}") from error


def request_bytes(path: str) -> tuple[bytes, str]:
    request = Request(f"{ABS_URL}{path}", headers={"Authorization": f"Bearer {ABS_API_KEY}"})
    with urlopen(request, timeout=40) as response:
        content_type = response.headers.get("content-type", "")
        return response.read(), content_type


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-+", "-", value).strip("-")
    return value or "audiolivro"


def short_file_id(value: str) -> str:
    value = re.sub(r"[^a-zA-Z0-9_-]+", "-", value).strip("-")
    return value[:80] or "audiolivro"


def as_list(value: Any) -> list[str]:
    if not value:
        return []
    if isinstance(value, list):
        return [str(item.get("name", item)) if isinstance(item, dict) else str(item) for item in value]
    return [str(value)]


def first_text(*values: Any) -> str:
    for value in values:
        if isinstance(value, str) and value.strip():
            return value.strip()
        if isinstance(value, list) and value:
            return ", ".join(as_list(value))
    return ""


def format_duration(seconds: Any) -> str:
    try:
        seconds = int(float(seconds or 0))
    except (TypeError, ValueError):
        return ""
    hours, remainder = divmod(seconds, 3600)
    minutes = remainder // 60
    if hours:
        return f"{hours}h {minutes:02d}min"
    return f"{minutes}min"


def format_date(value: Any) -> str:
    if not value:
        return datetime.now(timezone.utc).date().isoformat()
    try:
        number = float(value)
        if number > 9999999999:
            number = number / 1000
        return datetime.fromtimestamp(number, timezone.utc).date().isoformat()
    except (TypeError, ValueError):
        pass
    text = str(value)
    return text[:10] if len(text) >= 10 else datetime.now(timezone.utc).date().isoformat()


def find_library_id() -> str:
    if ABS_LIBRARY_ID:
        return ABS_LIBRARY_ID

    libraries = request_json("/api/libraries").get("libraries", [])
    for library in libraries:
        if library.get("mediaType") == "book":
            return library["id"]
    if libraries:
        return libraries[0]["id"]
    raise SystemExit("Nenhuma biblioteca encontrada no Audiobookshelf.")


def fetch_items(library_id: str) -> list[dict[str, Any]]:
    page = 0
    limit = 200
    items: list[dict[str, Any]] = []

    while True:
        payload = request_json(
            f"/api/libraries/{library_id}/items",
            {
                "limit": limit,
                "page": page,
                "sort": "addedAt",
                "desc": 1,
                "minified": 0,
                "collapseSeries": 0,
            },
        )
        results = payload.get("results", [])
        items.extend(results)
        total = int(payload.get("total", len(items)))
        if len(items) >= total or not results:
            return items
        page += 1


def cover_extension(content_type: str) -> str:
    if "webp" in content_type:
        return ".webp"
    if "png" in content_type:
        return ".png"
    return ".jpg"


def download_cover(item_id: str, file_id: str) -> str:
    try:
        data, content_type = request_bytes(f"/api/items/{item_id}/cover")
    except Exception:
        return "capas/hero-library.svg"

    ext = cover_extension(content_type)
    filename = f"{file_id}{ext}"
    (COVERS_DIR / filename).write_bytes(data)
    return f"capas/{filename}"


def convert_item(item: dict[str, Any]) -> dict[str, Any]:
    media = item.get("media") or {}
    metadata = media.get("metadata") or {}
    item_id = item.get("id") or item.get("libraryItemId") or slugify(item.get("name", "item"))
    title = first_text(metadata.get("title"), item.get("name"), item_id)
    file_id = short_file_id(str(item_id))

    authors = first_text(metadata.get("authorName"), metadata.get("authors"), metadata.get("author"))
    narrators = first_text(metadata.get("narratorName"), metadata.get("narrators"), metadata.get("narrator"))
    genres = as_list(metadata.get("genres"))
    series = metadata.get("seriesName") or ""
    if not series and isinstance(metadata.get("series"), list) and metadata["series"]:
        series = metadata["series"][0].get("name", "")

    return {
        "id": str(item_id),
        "titulo": title,
        "autor": authors,
        "narrador": narrators,
        "genero": genres[0] if genres else "",
        "duracao": format_duration(media.get("duration")),
        "serie": series,
        "adicionado_em": format_date(item.get("addedAt")),
        "capa": download_cover(str(item_id), file_id),
        "descricao": metadata.get("description") or metadata.get("subtitle") or "",
    }


def write_json(path: Path, payload: Any) -> None:
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> int:
    DATA_DIR.mkdir(exist_ok=True)
    COVERS_DIR.mkdir(exist_ok=True)

    library_id = find_library_id()
    items = fetch_items(library_id)
    catalog = [convert_item(item) for item in items]

    status = {
        "servidor": "online",
        "ultima_sincronizacao": datetime.now(timezone.utc).isoformat(),
        "total_audiolivros": len(catalog),
        "ouvintes_ativos": 0,
        "mensagem": "Sincronizacao concluida com o Audiobookshelf.",
    }

    write_json(DATA_DIR / "catalogo.json", catalog)
    write_json(DATA_DIR / "ouvindo-agora.json", [])
    write_json(DATA_DIR / "status.json", status)

    print(f"Sincronizados {len(catalog)} audiolivros da biblioteca {library_id}.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
