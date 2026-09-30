# A Biblioteca da Taverna - GitHub Edition

Projeto estatico pronto para GitHub Pages, feito para publicar um catalogo de audiolivros sincronizado futuramente a partir do Audiobookshelf.

## Estrutura

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── data/
│   ├── catalogo.json
│   ├── ouvindo-agora.json
│   └── status.json
└── capas/
    ├── hero-library.svg
    └── *.svg
```

## Como abrir localmente

Abra `index.html` no navegador. A pagina possui dados de reserva no JavaScript para continuar navegavel mesmo quando o navegador bloqueia `fetch()` de arquivos locais.

Para testar exatamente como no GitHub Pages, rode qualquer servidor estatico simples dentro da pasta do projeto, por exemplo:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Como publicar no GitHub Pages

1. Crie um repositorio no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositorio.
3. No GitHub, abra `Settings` -> `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch principal, normalmente `main`, e a pasta `/root`.
6. Salve. O GitHub publicara o site em alguns minutos.

Se o repositorio for `usuario.github.io`, a pagina fica em `https://usuario.github.io/`. Se for um repositorio comum, fica em `https://usuario.github.io/nome-do-repositorio/`.

## Como o futuro `sync_abs.py` deve atualizar o site

O sincronizador local deve rodar no computador onde o Audiobookshelf consegue ser acessado. Ele deve:

1. Consultar a API do Audiobookshelf usando URL e token configurados em variaveis de ambiente.
2. Montar `data/catalogo.json` com a lista completa de audiolivros.
3. Montar `data/ouvindo-agora.json` com as sessoes de escuta ativas ou recentes.
4. Montar `data/status.json` com horario da ultima sincronizacao, total de audiolivros, ouvintes ativos e estado do servidor.
5. Baixar ou converter capas para a pasta `capas/`, preferencialmente em `.webp` para carregar rapido no celular.
6. Fazer commit e push automatico para o GitHub.

Formato esperado de `catalogo.json`:

```json
[
  {
    "id": "identificador-estavel",
    "titulo": "Nome do audiolivro",
    "autor": "Nome do autor",
    "narrador": "Nome do narrador",
    "genero": "Fantasia",
    "duracao": "10h 20min",
    "serie": "Nome da serie",
    "adicionado_em": "2026-09-29",
    "capa": "capas/identificador-estavel.webp",
    "descricao": "Resumo curto do audiolivro."
  }
]
```

Formato esperado de `ouvindo-agora.json`:

```json
[
  {
    "id": "identificador-estavel",
    "usuario": "Nome exibido",
    "progresso": 42,
    "capitulo": "Capitulo atual"
  }
]
```

Formato esperado de `status.json`:

```json
{
  "servidor": "online",
  "ultima_sincronizacao": "2026-09-29T20:40:00-03:00",
  "total_audiolivros": 842,
  "ouvintes_ativos": 4,
  "mensagem": "Sincronizacao concluida com sucesso."
}
```

Quando a sincronizacao ficar antiga, o site mostra `Status nao confirmado` em vez de presumir que o servidor esta offline.

## Sincronizador inicial incluido

Este projeto ja inclui `scripts/sync_abs.py`. Ele consulta o Audiobookshelf, gera `data/catalogo.json`, baixa capas para `capas/` e atualiza `data/status.json`.

No PowerShell, dentro da pasta do repositorio:

```powershell
$env:ABS_URL = "http://SEU-SERVIDOR-ABS:13378"
$env:ABS_API_KEY = "SUA_API_KEY_DO_ABS"
python scripts/sync_abs.py
```

Se tiver mais de uma biblioteca no Audiobookshelf, informe tambem:

```powershell
$env:ABS_LIBRARY_ID = "ID_DA_BIBLIOTECA"
```

Depois da sincronizacao, envie as alteracoes para o GitHub:

```powershell
git add data capas
git commit -m "Atualiza catalogo do Audiobookshelf"
git push
```

O GitHub Pages publica a atualizacao em alguns minutos.
