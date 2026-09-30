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
  filter: "todos"
};

const els = {
  searchInput: document.querySelector("#searchInput"),
  bookCount: document.querySelector("#bookCount"),
  listenerCount: document.querySelector("#listenerCount"),
  onlineIndicator: document.querySelector("#onlineIndicator"),
  lastSync: document.querySelector("#lastSync"),
  recentCount: document.querySelector("#recentCount"),
  recentGrid: document.querySelector("#recentGrid"),
  activeSessions: document.querySelector("#activeSessions"),
  listeningGrid: document.querySelector("#listeningGrid"),
  catalogGrid: document.querySelector("#catalogGrid"),
  emptyState: document.querySelector("#emptyState"),
  statusLight: document.querySelector("#statusLight"),
  statusTitle: document.querySelector("#statusTitle"),
  statusMessage: document.querySelector("#statusMessage"),
  dialog: document.querySelector("#bookDialog"),
  dialogBody: document.querySelector("#dialogBody"),
  dialogClose: document.querySelector("#dialogClose")
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

function formatRelativeSync(value) {
  if (!value) return "Sem sincronizacao registrada";
  const syncDate = new Date(value);
  if (Number.isNaN(syncDate.getTime())) return "Sincronizacao registrada";
  const minutes = Math.max(0, Math.round((Date.now() - syncDate.getTime()) / 60000));
  if (minutes < 1) return "Atualizado agora";
  if (minutes < 60) return `Atualizado ha ${minutes} min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `Atualizado ha ${hours} h`;
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
  button.className = "book-card";
  button.type = "button";
  button.innerHTML = `
    <div class="cover-wrap">
      <img src="${book.capa}" alt="Capa de ${book.titulo}" loading="lazy">
    </div>
    <h3>${book.titulo}</h3>
    <p>${book.autor}</p>
  `;
  button.addEventListener("click", () => openBook(book));
  return button;
}

function renderRecent() {
  const recent = [...state.catalog]
    .sort((a, b) => new Date(b.adicionado_em) - new Date(a.adicionado_em))
    .slice(0, 6);

  els.recentGrid.replaceChildren(...recent.map(createBookCard));
  els.recentCount.textContent = `${recent.length} destaques`;
}

function renderListening() {
  const byId = new Map(state.catalog.map((book) => [book.id, book]));
  const cards = state.listening.map((session) => {
    const book = byId.get(session.id);
    const article = document.createElement("article");
    article.className = "listening-card";
    if (!book) return article;
    article.innerHTML = `
      <img src="${book.capa}" alt="Capa de ${book.titulo}" loading="lazy">
      <div>
        <h3>${book.titulo}</h3>
        <p>${session.usuario} - ${session.capitulo}</p>
        <span>${session.progresso}% concluido</span>
        <div class="progress" aria-hidden="true"><i style="width: ${session.progresso}%"></i></div>
      </div>
    `;
    return article;
  });

  els.listeningGrid.replaceChildren(...cards);
  els.activeSessions.textContent = `${state.listening.length} sessoes ativas`;
}

function getFilteredCatalog() {
  const query = normalize(state.query);
  return state.catalog.filter((book) => {
    const matchesFilter = state.filter === "todos" || normalize(book.genero) === state.filter;
    const haystack = normalize([book.titulo, book.autor, book.narrador, book.genero, book.serie].join(" "));
    return matchesFilter && (!query || haystack.includes(query));
  });
}

function renderCatalog() {
  const books = getFilteredCatalog();
  els.catalogGrid.replaceChildren(...books.map(createBookCard));
  els.emptyState.hidden = books.length > 0;
}

function renderStatus() {
  const freshness = getFreshness(state.status);
  const statusLabels = {
    online: ["Online", "Servidor online"],
    stale: ["Nao confirmado", "Status nao confirmado"],
    offline: ["Offline", "Servidor offline"]
  };
  const [shortLabel, title] = statusLabels[freshness];

  els.bookCount.textContent = state.status.total_audiolivros || state.catalog.length;
  els.listenerCount.textContent = state.status.ouvintes_ativos ?? state.listening.length;
  els.onlineIndicator.textContent = shortLabel;
  els.lastSync.textContent = formatRelativeSync(state.status.ultima_sincronizacao);
  els.statusLight.className = `status-light ${freshness}`;
  els.statusTitle.textContent = title;
  els.statusMessage.textContent = `${formatRelativeSync(state.status.ultima_sincronizacao)}. ${state.status.mensagem || ""}`;
}

function openBook(book) {
  els.dialogBody.innerHTML = `
    <div class="dialog-content">
      <img src="${book.capa}" alt="Capa de ${book.titulo}">
      <div>
        <p class="eyebrow">${book.genero}</p>
        <h3>${book.titulo}</h3>
        <div class="dialog-meta">
          ${book.autor} - Narracao de ${book.narrador}<br>
          ${book.duracao}${book.serie ? ` - ${book.serie}` : ""}
        </div>
        <p>${book.descricao}</p>
      </div>
    </div>
  `;
  els.dialog.showModal();
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderCatalog();
  });

  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      state.filter = button.dataset.filter;
      renderCatalog();
    });
  });

  els.dialogClose.addEventListener("click", () => els.dialog.close());
  els.dialog.addEventListener("click", (event) => {
    if (event.target === els.dialog) els.dialog.close();
  });
}

async function init() {
  const [catalog, listening, status] = await Promise.all([
    loadJson("data/catalogo.json", fallbackCatalog),
    loadJson("data/ouvindo-agora.json", fallbackListening),
    loadJson("data/status.json", fallbackStatus)
  ]);

  state.catalog = catalog;
  state.listening = listening;
  state.status = status;

  renderStatus();
  renderRecent();
  renderListening();
  renderCatalog();
  bindEvents();
}

init();
