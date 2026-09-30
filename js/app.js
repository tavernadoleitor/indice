const fallbackCatalog = [
  {
    id: "vento-nas-muralhas",
    titulo: "O Vento nas Muralhas",
    autor: "Helena Vale",
    narrador: "Caio Antunes",
    genero: "Fantasia",
    duracao: "11h 42min",
    serie: "Cronicas da Bruma",
    adicionado_em: "2026-09-27",
    capa: "capas/vento-nas-muralhas.svg",
    descricao: "Uma fortaleza antiga guarda mapas, juramentos e uma porta que so se abre quando a cidade inteira adormece."
  },
  {
    id: "cartas-para-orion",
    titulo: "Cartas para Orion",
    autor: "Marina Sato",
    narrador: "Livia Duarte",
    genero: "Ficcao",
    duracao: "8h 05min",
    serie: "",
    adicionado_em: "2026-09-25",
    capa: "capas/cartas-para-orion.svg",
    descricao: "Mensagens enviadas ao espaco retornam decadas depois com respostas que ninguem deveria conhecer."
  },
  {
    id: "a-casa-do-farol",
    titulo: "A Casa do Farol",
    autor: "Rafael Monte",
    narrador: "Bianca Toledo",
    genero: "Misterio",
    duracao: "9h 18min",
    serie: "Ilha Norte",
    adicionado_em: "2026-09-22",
    capa: "capas/a-casa-do-farol.svg",
    descricao: "Um farol apagado, uma vila silenciosa e fitas antigas que revelam mais do que uma investigadora queria ouvir."
  },
  {
    id: "mercadores-da-chuva",
    titulo: "Mercadores da Chuva",
    autor: "Dante Moreira",
    narrador: "Nuno Reis",
    genero: "Fantasia",
    duracao: "13h 27min",
    serie: "Rotas Impossiveis",
    adicionado_em: "2026-09-20",
    capa: "capas/mercadores-da-chuva.svg",
    descricao: "Em um reino seco, caravanas vendem tempestades engarrafadas e uma aprendiz descobre o preco real da agua."
  },
  {
    id: "manual-do-tempo-partido",
    titulo: "Manual do Tempo Partido",
    autor: "Irene Costa",
    narrador: "Sofia Braga",
    genero: "Ficcao",
    duracao: "7h 56min",
    serie: "",
    adicionado_em: "2026-09-18",
    capa: "capas/manual-do-tempo-partido.svg",
    descricao: "Um guia domestico para consertar relogios impossiveis se transforma no rastro de uma familia desaparecida."
  },
  {
    id: "o-ultimo-contrato",
    titulo: "O Ultimo Contrato",
    autor: "Bruno Ferraz",
    narrador: "Mauro Lima",
    genero: "Misterio",
    duracao: "10h 33min",
    serie: "",
    adicionado_em: "2026-09-15",
    capa: "capas/o-ultimo-contrato.svg",
    descricao: "Um advogado encontra uma clausula escrita com sua propria letra em um contrato assinado antes de seu nascimento."
  },
  {
    id: "jardins-de-sal",
    titulo: "Jardins de Sal",
    autor: "Laura Mendonca",
    narrador: "Clara Villar",
    genero: "Fantasia",
    duracao: "12h 01min",
    serie: "Cidades Afundadas",
    adicionado_em: "2026-09-13",
    capa: "capas/jardins-de-sal.svg",
    descricao: "Cidades submersas florescem sob o oceano enquanto uma curadora tenta salvar memorias que estao criando raizes."
  },
  {
    id: "silencio-em-proxima",
    titulo: "Silencio em Proxima",
    autor: "Theo Barros",
    narrador: "Renata Gil",
    genero: "Ficcao",
    duracao: "6h 44min",
    serie: "",
    adicionado_em: "2026-09-12",
    capa: "capas/silencio-em-proxima.svg",
    descricao: "A primeira colonia humana fora do sistema solar para de transmitir, mas continua enviando musica."
  },
  {
    id: "noite-das-chaves",
    titulo: "Noite das Chaves",
    autor: "Patricia Nobre",
    narrador: "Edu Martins",
    genero: "Misterio",
    duracao: "8h 49min",
    serie: "Detetive Alva",
    adicionado_em: "2026-09-10",
    capa: "capas/noite-das-chaves.svg",
    descricao: "Todas as portas de um hotel historico se trancam ao mesmo tempo, menos uma."
  },
  {
    id: "atlas-das-cinzas",
    titulo: "Atlas das Cinzas",
    autor: "Cecilia Ramos",
    narrador: "Gustavo Neves",
    genero: "Fantasia",
    duracao: "14h 12min",
    serie: "Mapas de Ninguem",
    adicionado_em: "2026-09-08",
    capa: "capas/atlas-das-cinzas.svg",
    descricao: "Um cartografo desenha terras que ainda nao existem e passa a ser perseguido por reis de futuros possiveis."
  },
  {
    id: "cidade-sem-eco",
    titulo: "Cidade Sem Eco",
    autor: "Lucas Amarante",
    narrador: "Paula Azevedo",
    genero: "Ficcao",
    duracao: "9h 02min",
    serie: "",
    adicionado_em: "2026-09-06",
    capa: "capas/cidade-sem-eco.svg",
    descricao: "Em uma metropole onde sons nao retornam, uma arquivista encontra uma gravacao que repete seu nome."
  },
  {
    id: "o-enigma-do-vinho",
    titulo: "O Enigma do Vinho",
    autor: "Sergio Matos",
    narrador: "Helio Prado",
    genero: "Misterio",
    duracao: "7h 21min",
    serie: "",
    adicionado_em: "2026-09-02",
    capa: "capas/o-enigma-do-vinho.svg",
    descricao: "Um sommelier aposentado investiga uma adega lendaria onde cada garrafa aponta para um crime diferente."
  }
];

const fallbackListening = [
  { id: "vento-nas-muralhas", usuario: "Leitor da Taverna", progresso: 68, capitulo: "Capitulo 21" },
  { id: "cartas-para-orion", usuario: "Visitante", progresso: 31, capitulo: "Entrada 7" },
  { id: "a-casa-do-farol", usuario: "Mesa do canto", progresso: 84, capitulo: "Fita 12" }
];

const fallbackStatus = {
  servidor: "online",
  ultima_sincronizacao: "2026-09-29T20:40:00-03:00",
  total_audiolivros: 12,
  ouvintes_ativos: 3,
  mensagem: "Dados de exemplo carregados. Substitua os JSONs pelo resultado do sync_abs.py."
};

const state = {
  catalog: [],
  listening: [],
  status: {},
  query: "",
  page: 1,
  pageSize: 48,
  requests: []
};

const requestFormConfig = {
  action: "https://docs.google.com/forms/d/e/1FAIpQLSfWNMs8rfalo_ypUK0MLyIt1yIe-G6m-zKf3GI2Fngd4-MbEw/formResponse",
  statusCsv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQCuf8TnTisw3gT4fDwnDxK2yJqmjmboEUGZzPYN3MH06yEcksg-M4gn864OoiKbrpX7bLoUYIWtSg/pub?gid=1050794349&single=true&output=csv",
  fields: {
    nome: "entry.1394853025",
    titulo: "entry.1389954983",
    autor: "entry.1879948104",
    observacao: "entry.1633326110"
  }
};

const els = {
  searchInput: document.querySelector("#searchInput"),
  searchSuggestions: document.querySelector("#searchSuggestions"),
  bookCount: document.querySelector("#bookCount"),
  listenerCount: document.querySelector("#listenerCount"),
  onlineIndicator: document.querySelector("#onlineIndicator"),
  heroStatusDot: document.querySelector("#heroStatusDot"),
  syncIndicator: document.querySelector("#syncIndicator"),
  recentCount: document.querySelector("#recentCount"),
  recentGrid: document.querySelector("#recentGrid"),
  listeningSection: document.querySelector("#ouvindo"),
  activeSessions: document.querySelector("#activeSessions"),
  listeningGrid: document.querySelector("#listeningGrid"),
  catalogGrid: document.querySelector("#catalogGrid"),
  emptyState: document.querySelector("#emptyState"),
  catalogSummary: document.querySelector("#catalogSummary"),
  prevPage: document.querySelector("#prevPage"),
  pageIndicator: document.querySelector("#pageIndicator"),
  nextPage: document.querySelector("#nextPage"),
  statusLight: document.querySelector("#statusLight"),
  statusTitle: document.querySelector("#statusTitle"),
  statusMessage: document.querySelector("#statusMessage"),
  dialog: document.querySelector("#bookDialog"),
  dialogBody: document.querySelector("#dialogBody"),
  dialogClose: document.querySelector("#dialogClose"),
  requestFab: document.querySelector("#requestFab"),
  requestStatusFab: document.querySelector("#requestStatusFab"),
  requestDialog: document.querySelector("#requestDialog"),
  requestClose: document.querySelector("#requestClose"),
  requestStatusDialog: document.querySelector("#requestStatusDialog"),
  requestStatusClose: document.querySelector("#requestStatusClose"),
  requestForm: document.querySelector("#requestForm"),
  requestName: document.querySelector("#requestName"),
  requestTitle: document.querySelector("#requestTitle"),
  requestAuthor: document.querySelector("#requestAuthor"),
  requestNote: document.querySelector("#requestNote"),
  requestFeedback: document.querySelector("#requestFeedback"),
  requestStatusList: document.querySelector("#requestStatusList")
};

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`Falha ao carregar ${path}`);
    return response.json();
  } catch (error) {
    return fallback;
  }
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatRelativeSync(value) {
  if (!value) return "Sem registro";
  const syncDate = new Date(value);
  if (Number.isNaN(syncDate.getTime())) return "Registrado";
  const minutes = Math.max(0, Math.round((Date.now() - syncDate.getTime()) / 60000));
  if (minutes < 1) return "Atualizado agora";
  if (minutes < 60) return `Há ${minutes} min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `Há ${hours} h`;
  return syncDate.toLocaleDateString("pt-BR");
}

function formatStatusMessage(value) {
  if (!value) return "Sem sincronização registrada";
  const syncDate = new Date(value);
  if (Number.isNaN(syncDate.getTime())) return "Sincronização registrada";
  const minutes = Math.max(0, Math.round((Date.now() - syncDate.getTime()) / 60000));
  if (minutes < 1) return "Atualizado agora";
  if (minutes < 60) return `Atualizado há ${minutes} min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `Atualizado há ${hours} h`;
  return `Atualizado em ${syncDate.toLocaleDateString("pt-BR")}`;
}

function getFreshness(status) {
  const serverState = normalize(status.servidor);
  if (serverState === "offline") return "offline";
  const syncDate = new Date(status.ultima_sincronizacao);
  if (Number.isNaN(syncDate.getTime())) return "stale";
  const ageMinutes = (Date.now() - syncDate.getTime()) / 60000;
  return ageMinutes > 90 ? "stale" : "online";
}

function createBookCard(book) {
  const button = document.createElement("button");
  const cover = getCoverPath(book);
  button.className = "book-card";
  button.type = "button";
  button.innerHTML = `
    <div class="cover-wrap">
      <img src="${cover}" alt="Capa de ${book.titulo}" loading="lazy">
    </div>
    <div class="book-info">
      <h3>${book.titulo}</h3>
      <p>${book.autor || "Autor não informado"}</p>
    </div>
  `;
  const image = button.querySelector("img");
  image.addEventListener("error", () => {
    image.src = "capas/hero-library.svg";
  }, { once: true });
  button.addEventListener("click", () => openBook(book));
  return button;
}

function getCoverPath(book) {
  return String(book.capa || "capas/hero-library.svg").replace(/\\/g, "/");
}

function createSuggestion(book) {
  const button = document.createElement("button");
  const cover = getCoverPath(book);
  button.className = "search-suggestion";
  button.type = "button";
  button.innerHTML = `
    <img src="${cover}" alt="" loading="lazy">
    <span>
      <strong>${escapeHtml(book.titulo)}</strong>
      <span>${escapeHtml(book.autor || "Autor não informado")}</span>
    </span>
  `;
  const image = button.querySelector("img");
  image.addEventListener("error", () => {
    image.src = "capas/hero-library.svg";
  }, { once: true });
  button.addEventListener("click", () => {
    els.searchSuggestions.hidden = true;
    openBook(book);
  });
  return button;
}

function renderSearchSuggestions() {
  const query = normalize(state.query);
  if (query.length < 2) {
    els.searchSuggestions.hidden = true;
    els.searchSuggestions.replaceChildren();
    return;
  }

  const matches = getFilteredCatalog().slice(0, 8);
  if (!matches.length) {
    els.searchSuggestions.hidden = false;
    els.searchSuggestions.innerHTML = `<p class="search-suggestion-empty">Nenhum audiolivro encontrado.</p>`;
    return;
  }

  els.searchSuggestions.hidden = false;
  els.searchSuggestions.replaceChildren(...matches.map(createSuggestion));
}

function renderRecent() {
  const recent = [...state.catalog]
    .sort((a, b) => new Date(b.adicionado_em) - new Date(a.adicionado_em))
    .slice(0, 6);

  els.recentGrid.replaceChildren(...recent.map(createBookCard));
  els.recentCount.textContent = `${recent.length} destaques`;
}

function renderListening() {
  if (!state.listening.length) {
    els.listeningSection.hidden = true;
    return;
  }

  const byId = new Map(state.catalog.map((book) => [book.id, book]));
  const cards = state.listening.map((session) => {
    const book = byId.get(session.id);
    if (!book) return null;
    const article = document.createElement("article");
    article.className = "listening-card";
    const cover = getCoverPath(book);
    article.innerHTML = `
      <img src="${cover}" alt="Capa de ${book.titulo}" loading="lazy">
      <div>
        <h3>${book.titulo}</h3>
        <p>${session.usuario} - ${session.capitulo}</p>
        <span>${session.progresso}% concluido</span>
        <div class="progress" aria-hidden="true"><i style="width: ${session.progresso}%"></i></div>
      </div>
    `;
    const image = article.querySelector("img");
    image.addEventListener("error", () => {
      image.src = "capas/hero-library.svg";
    }, { once: true });
    return article;
  }).filter(Boolean);

  if (!cards.length) {
    els.listeningSection.hidden = true;
    return;
  }

  els.listeningSection.hidden = false;
  els.listeningGrid.replaceChildren(...cards);
  els.activeSessions.textContent = `${state.listening.length} sessões ativas`;
}

function getFilteredCatalog() {
  const query = normalize(state.query);
  return state.catalog.filter((book) => {
    const haystack = normalize([book.titulo, book.autor, book.narrador, book.genero, book.serie].join(" "));
    return !query || haystack.includes(query);
  });
}

function renderCatalog() {
  const books = getFilteredCatalog();
  const totalPages = Math.max(1, Math.ceil(books.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * state.pageSize;
  const visibleBooks = books.slice(start, start + state.pageSize);

  els.catalogGrid.replaceChildren(...visibleBooks.map(createBookCard));
  els.emptyState.hidden = books.length > 0;
  els.catalogSummary.textContent = books.length
    ? `Mostrando ${start + 1}-${start + visibleBooks.length} de ${books.length} audiolivros`
    : "Nenhum audiolivro encontrado";
  els.pageIndicator.textContent = `Página ${state.page} de ${totalPages}`;
  els.prevPage.disabled = state.page <= 1;
  els.nextPage.disabled = state.page >= totalPages;
}

function renderStatus() {
  const freshness = getFreshness(state.status);
  const statusLabels = {
    online: ["Online", "Servidor online"],
    stale: ["A conferir", "Status não confirmado"],
    offline: ["Offline", "Servidor offline"]
  };
  const [shortLabel, title] = statusLabels[freshness];

  els.bookCount.textContent = state.status.total_audiolivros || state.catalog.length;
  els.listenerCount.textContent = state.status.ouvintes_ativos ?? state.listening.length;
  els.onlineIndicator.textContent = shortLabel;
  els.heroStatusDot.className = freshness;
  els.syncIndicator.textContent = formatRelativeSync(state.status.ultima_sincronizacao);
  els.statusLight.className = `status-light ${freshness}`;
  els.statusTitle.textContent = title;
  els.statusMessage.textContent = `${formatStatusMessage(state.status.ultima_sincronizacao)}. ${state.status.mensagem || ""}`;
}

async function submitRequestToGoogleForms(request) {
  const payload = new FormData();
  payload.append(requestFormConfig.fields.nome, request.nome);
  payload.append(requestFormConfig.fields.titulo, request.titulo);
  payload.append(requestFormConfig.fields.autor, request.autor);
  payload.append(requestFormConfig.fields.observacao, request.observacao);

  await fetch(requestFormConfig.action, {
    method: "POST",
    mode: "no-cors",
    body: payload
  });
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

function rowValue(row, names) {
  const keys = Object.keys(row);
  for (const name of names) {
    const wanted = normalize(name);
    const key = keys.find((candidate) => normalize(candidate) === wanted);
    if (key && row[key]) return row[key].trim();
  }
  return "";
}

function statusClass(status) {
  const value = normalize(status);
  if (value.includes("disponivel")) return "available";
  if (value.includes("adicionado") || value.includes("atendido") || value.includes("concluido")) return "done";
  if (value.includes("procurando") || value.includes("prepar") || value.includes("analise") || value.includes("andamento")) return "progress";
  return "pending";
}

function findCatalogMatch(title, author = "") {
  const wantedTitle = normalize(title);
  const wantedAuthor = normalize(author);
  if (!wantedTitle) return null;

  return state.catalog.find((book) => {
    const bookTitle = normalize(book.titulo);
    const bookAuthor = normalize(book.autor);
    const titleMatches = bookTitle === wantedTitle || bookTitle.includes(wantedTitle) || wantedTitle.includes(bookTitle);
    const authorMatches = !wantedAuthor || !bookAuthor || bookAuthor.includes(wantedAuthor) || wantedAuthor.includes(bookAuthor);
    return titleMatches && authorMatches;
  }) || null;
}

async function loadRequestStatuses() {
  els.requestStatusList.innerHTML = `<p class="request-empty">Carregando pedidos...</p>`;

  try {
    const response = await fetch(requestFormConfig.statusCsv, { cache: "no-store" });
    if (!response.ok) throw new Error("Falha ao carregar planilha");
    const rows = parseCsv(await response.text());
    const headers = rows.shift() || [];
    const requests = rows.map((row) => Object.fromEntries(headers.map((header, index) => [header.trim(), row[index] || ""])))
      .filter((row) => rowValue(row, ["Título", "Titulo", "Livro"]));

    renderRequestStatuses(requests);
  } catch (error) {
    els.requestStatusList.innerHTML = `<p class="request-empty">Não foi possível carregar os status agora.</p>`;
  }
}

function renderRequestStatuses(requests) {
  if (!requests.length) {
    els.requestStatusList.innerHTML = `<p class="request-empty">Nenhum pedido publicado para acompanhamento.</p>`;
    return;
  }

  els.requestStatusList.replaceChildren(...requests.map((request) => {
    const title = rowValue(request, ["Título", "Titulo", "Livro"]);
    const author = rowValue(request, ["Autor", "Autora"]);
    const requester = rowValue(request, ["Pedido por", "Solicitante", "Nome", "Apelido"]);
    const catalogMatch = findCatalogMatch(title, author);
    const rawStatus = rowValue(request, ["Status", "Situação", "Situacao"]) || "Recebido";
    const status = catalogMatch ? "Disponível no acervo" : rawStatus;
    const estimate = rowValue(request, ["Previsão", "Previsao", "Prazo"]);
    const note = rowValue(request, ["Observação", "Observacao", "Notas", "Nota"]);
    const updated = rowValue(request, ["Atualizado em", "Atualização", "Atualizacao", "Data"]);
    const item = document.createElement("article");
    item.className = "request-status-item";
    item.innerHTML = `
      <span class="request-status-badge ${statusClass(status)}">${escapeHtml(status)}</span>
      <div class="request-status-title-row">
        <strong>${escapeHtml(title)}</strong>
        ${catalogMatch ? `<button class="request-open-book" type="button" data-book-id="${escapeHtml(catalogMatch.id)}">Abrir</button>` : ""}
      </div>
      <div class="request-status-meta">
        ${author ? `<span>${escapeHtml(author)}</span>` : ""}
        ${requester ? `<span>Pedido por ${escapeHtml(requester)}</span>` : ""}
        ${estimate ? `<span>Previsão: ${escapeHtml(estimate)}</span>` : ""}
        ${updated ? `<span>Atualizado em ${escapeHtml(updated)}</span>` : ""}
      </div>
      ${note ? `<p>${escapeHtml(note)}</p>` : ""}
    `;
    return item;
  }));

  els.requestStatusList.querySelectorAll(".request-open-book").forEach((button) => {
    button.addEventListener("click", () => {
      const book = state.catalog.find((item) => item.id === button.dataset.bookId);
      if (book) openBook(book);
    });
  });
}

function openBook(book) {
  const cover = getCoverPath(book);
  const details = [
    book.autor,
    book.narrador ? `Narração de ${book.narrador}` : "",
    book.duracao,
    book.serie
  ].filter(Boolean);
  els.dialogBody.innerHTML = `
    <div class="dialog-content">
      <img src="${cover}" alt="Capa de ${book.titulo}">
      <div>
        <p class="eyebrow">${book.genero || "Audiolivro"}</p>
        <h3>${book.titulo}</h3>
        <div class="dialog-meta">${details.join(" · ")}</div>
        <p>${book.descricao || "Descrição não disponível no momento."}</p>
      </div>
    </div>
  `;
  const image = els.dialogBody.querySelector("img");
  image.addEventListener("error", () => {
    image.src = "capas/hero-library.svg";
  }, { once: true });
  els.dialog.showModal();
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    state.page = 1;
    renderSearchSuggestions();
    renderCatalog();
  });

  els.searchInput.addEventListener("focus", renderSearchSuggestions);

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-panel") && !event.target.closest(".search-suggestions")) {
      els.searchSuggestions.hidden = true;
    }
  });

  els.prevPage.addEventListener("click", () => {
    state.page = Math.max(1, state.page - 1);
    renderCatalog();
    document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  els.nextPage.addEventListener("click", () => {
    state.page += 1;
    renderCatalog();
    document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  els.dialogClose.addEventListener("click", () => els.dialog.close());
  els.dialog.addEventListener("click", (event) => {
    if (event.target === els.dialog) els.dialog.close();
  });

  els.requestFab.addEventListener("click", () => {
    els.requestFeedback.textContent = "";
    els.requestDialog.showModal();
  });

  els.requestStatusFab.addEventListener("click", () => {
    loadRequestStatuses();
    els.requestStatusDialog.showModal();
  });

  els.requestClose.addEventListener("click", () => els.requestDialog.close());
  els.requestStatusClose.addEventListener("click", () => els.requestStatusDialog.close());
  els.requestDialog.addEventListener("click", (event) => {
    if (event.target === els.requestDialog) els.requestDialog.close();
  });
  els.requestStatusDialog.addEventListener("click", (event) => {
    if (event.target === els.requestStatusDialog) els.requestStatusDialog.close();
  });

  els.requestForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = els.requestForm.querySelector("button[type='submit']");
    const request = {
      nome: els.requestName.value.trim(),
      titulo: els.requestTitle.value.trim(),
      autor: els.requestAuthor.value.trim(),
      observacao: els.requestNote.value.trim(),
      data: new Date().toLocaleDateString("pt-BR")
    };

    submitButton.disabled = true;
    els.requestFeedback.textContent = "Enviando pedido...";

    try {
      await submitRequestToGoogleForms(request);
      els.requestForm.reset();
      els.requestFeedback.textContent = "Pedido enviado. Obrigado!";
    } catch (error) {
      els.requestFeedback.textContent = "Não foi possível enviar agora. Tente novamente em instantes.";
    } finally {
      submitButton.disabled = false;
    }
  });
}

async function init() {
  const [catalog, listening, status] = await Promise.all([
    loadJson("data/catalogo.json", fallbackCatalog),
    loadJson("data/ouvindo-agora.json", fallbackListening),
    loadJson("data/status.json", fallbackStatus)
  ]);

  state.catalog = Array.isArray(catalog) ? catalog : fallbackCatalog;
  state.listening = Array.isArray(listening) ? listening : [];
  state.status = status && typeof status === "object" && !Array.isArray(status) ? status : fallbackStatus;

  renderStatus();
  renderRecent();
  renderListening();
  renderCatalog();
  bindEvents();
}

init();
