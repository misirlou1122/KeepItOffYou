"use strict";

const STORAGE_KEY = "keep-it-off-you-v1";

const icons = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V21h14V10.5"/><path d="M9 21v-6h6v6"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H21"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H21v20H6.5A2.5 2.5 0 0 1 4 19.5z"/><path d="M8 6h8"/><path d="M8 10h7"/>',
  altar: '<path d="M4 21h16"/><path d="M7 21V9"/><path d="M17 21V9"/><path d="M5 9h14"/><path d="M12 9V3"/><path d="M10 5l2-2 2 2"/><path d="M9 14h6"/><path d="M8 18h8"/>',
  spark: '<path d="m12 2 1.7 6.1L20 10l-6.3 1.9L12 18l-1.7-6.1L4 10l6.3-1.9L12 2Z"/><path d="M19 15v4"/><path d="M21 17h-4"/><path d="M5 17v3"/><path d="M6.5 18.5h-3"/>',
  sources: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/><path d="m15 5 3 3"/>',
  back: '<path d="M15 18 9 12l6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  flame: '<path d="M12 22c4 0 7-2.8 7-6.6 0-2.8-1.6-5.1-4.8-7.5C13.5 10.5 12 12 10 13c.3-3.3-.9-6-3-8-1.5 2.2-2 4.5-2 7.2C5 18 8.5 22 12 22Z"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>'
};

const publicSources = [
  {
    title: "National Museum of African American History and Culture, What Is Voodoo?",
    url: "https://www.searchablemuseum.com/what-is-voodoo/",
    note: "New Orleans Voodoo as African-derived practice shaped by West and Central African religions and Catholicism."
  },
  {
    title: "Encyclopaedia Britannica, Marie Laveau",
    url: "https://www.britannica.com/biography/Marie-Laveau",
    note: "Biographical anchor for Marie Laveau and nineteenth-century New Orleans Vodou."
  },
  {
    title: "National Park Service, Hoodoo in St. Louis",
    url: "https://www.nps.gov/articles/000/hoodoo-in-st-louis-an-african-american-religious-tradition.htm",
    note: "Hoodoo as African American conjure/rootwork shaped under slavery, Christianity, and African diasporic traditions."
  },
  {
    title: "National Park Service, Legba",
    url: "https://www.nps.gov/afbg/learn/historyculture/legba.htm",
    note: "Legba as a crossroads and communication figure in West African and Caribbean contexts."
  },
  {
    title: "Encyclopaedia Britannica, Orisha",
    url: "https://www.britannica.com/topic/orisha",
    note: "Orisha as complex presences linking divine force, nature, ancestry, objects, and community."
  },
  {
    title: "UNESCO, Ifa Divination System",
    url: "https://ich.unesco.org/en/RL/ifa-divination-system-00146",
    note: "Ifa as a Yoruba divination system with a large oral/textual corpus and diaspora presence."
  },
  {
    title: "Library of Congress, Spirituals",
    url: "https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ritual-and-worship/spirituals/",
    note: "Spirituals and worship music as part of enslaved African American religious life."
  }
];

const localSources = [
  "Yvonne Patricia Chireau, Black Magic: Religion and the African American Conjuring Tradition",
  "Blake Touchstone, Voodoo in New Orleans, Louisiana History",
  "Ina Johanna Fandrich, The Mysterious Voodoo Queen, Marie Laveaux",
  "William Bascom, Ifa Divination: Communication Between Gods and Men in West Africa",
  "Chief Fama, Fundamentals of the Yoruba Religion: Orisa Worship",
  "Maya Deren, Divine Horsemen: The Living Gods of Haiti",
  "Luisah Teish, Jambalaya: The Natural Woman's Book of Personal Charms and Practical Rituals",
  "Lilith Dorsey, Orishas, Goddesses, and Voodoo Queens",
  "Harry Middleton Hyatt, Hoodoo, Conjuration, Witchcraft, Rootwork",
  "The Conjuring of America"
];

const modules = [
  {
    id: "map",
    eyebrow: "Start Here",
    title: "What These Traditions Are, and Are Not",
    summary: "A plain-language map of Vodun, Vodou, Louisiana Voodoo, Hoodoo, Ifa, and Orisha traditions.",
    accent: "#d7b46a",
    lessons: [
      {
        title: "Names Matter",
        body: [
          "Vodun often points toward West African Fon and Ewe traditions. Haitian Vodou is a Haitian religion shaped by West and Central African religious worlds, Catholicism, Indigenous Caribbean context, and the history of slavery and revolution. Louisiana Voodoo is related but not identical; it grew in New Orleans through African, Creole, Catholic, Indigenous, and Haitian influences.",
          "Hoodoo, conjure, and rootwork are African American folk-spiritual practices rather than one centralized church. They include healing, protection, divination, charms, Psalms, herbs, roots, and everyday ritual technologies developed by enslaved and free Black communities.",
          "Ifa belongs to Yoruba religious culture and centers divination, ethics, destiny, oral literature, and the guidance of Orunmila. Orisha traditions are larger than Ifa alone, and every branch has lineage-specific rules."
        ],
        remember: "Do not flatten everything into one word. Related traditions can share ancestors, spirits, tools, or history while keeping distinct houses, lineages, languages, and rules."
      },
      {
        title: "Beginner Boundaries",
        body: [
          "A beginner can study history, learn respectful vocabulary, keep a clean ancestor remembrance space, pray in their own words, journal, support reputable teachers, and visit public ceremonies only when invited.",
          "A beginner should not copy initiatory rites, feed spirits from a book as if they are in a house, perform animal sacrifice, claim priestly titles, sell services, or mix closed practices casually. Where a practice says 'ask your elder,' that is the practice.",
          "Your app should therefore act like a study companion and devotional organizer, not a priesthood simulator."
        ],
        remember: "Respect is a feature, not a limitation."
      }
    ]
  },
  {
    id: "history",
    eyebrow: "History",
    title: "Routes, Slavery, Survival, and New Orleans",
    summary: "How African diasporic religion survived oppression and took distinctive Louisiana forms.",
    accent: "#9ec9c0",
    lessons: [
      {
        title: "Africa to the Americas",
        body: [
          "The Atlantic slave trade violently displaced people from many African regions, including West and Central African societies with their own languages, ritual specialists, medicine, divination, spirit relationships, and ancestor practices.",
          "Enslaved people were forced into Christian colonial worlds, but African religious memory did not simply vanish. It adapted under surveillance through song, healing, ritual objects, coded gatherings, Catholic saints, Bible use, dreams, and community authority.",
          "Public sources and the local books agree on one big point: these traditions are not movie superstition. They are survival systems, moral worlds, healing arts, and religious practices formed under extreme historical pressure."
        ],
        remember: "The story begins with people, not exoticism."
      },
      {
        title: "New Orleans as a Crossroads",
        body: [
          "New Orleans was French, Spanish, African, Caribbean, Catholic, Indigenous, and American all at once. That made it a powerful cultural crossroads, especially for free people of color, enslaved Africans, refugees from Saint-Domingue, musicians, healers, market women, and spiritual leaders.",
          "Congo Square is central in public memory because enslaved and free Black people gathered there for music, dance, commerce, and cultural expression. Police raids and hostile newspaper accounts also shaped how outsiders imagined Voodoo.",
          "Louisiana Voodoo became visible through public ceremony, private counsel, healing, gris-gris, Catholic imagery, spiritual baths, and the reputations of Voodoo queens and root doctors."
        ],
        remember: "Louisiana Voodoo is a New Orleans crossroads tradition."
      },
      {
        title: "Marie Laveau and Power",
        body: [
          "Marie Laveau, usually dated 1801 to 1881, became the best-known Voodoo figure in New Orleans. Historians separate the archival woman from the legend, but both matter because the legend shows how New Orleans remembered Black female spiritual authority.",
          "Sources describe her as a free woman of color, hairdresser, community adviser, healer, Catholic, and ritual leader. Her power was social as well as spiritual: she moved through households, prisons, churches, and neighborhood networks.",
          "Many sensational stories about her reveal as much about racism, gender, tourism, and fear of Black religion as they do about actual practice."
        ],
        remember: "Study Marie Laveau as history, ancestor, symbol, and contested memory."
      }
    ]
  },
  {
    id: "hoodoo",
    eyebrow: "Conjure",
    title: "Hoodoo, Rootwork, and Black Folk Practice",
    summary: "A respectful beginner view of conjure as African American vernacular religion.",
    accent: "#c9875d",
    lessons: [
      {
        title: "Conjure as Vernacular Religion",
        body: [
          "Yvonne Chireau frames conjure and Hoodoo as part of African American religious life rather than a separate fantasy category. People could attend church, use Psalms, call on God, consult rootworkers, wear protection, and seek spiritual diagnosis within the same world.",
          "Hyatt's interviews preserve many voices but should be read carefully. They are valuable folklore records, yet the collector's framing and language reflect the era. Use them for evidence, not as a script to imitate uncritically.",
          "Rootwork often centers practical needs: protection, healing, uncrossing, justice, luck, love, work, court cases, and removing harm. The ethical question is not only 'Can this be done?' but 'Should I be the person doing it?'"
        ],
        remember: "Hoodoo is lived culture and Black religious history, not a grab bag."
      },
      {
        title: "Tools Without Theater",
        body: [
          "Common Hoodoo materials can include roots, herbs, dirt, water, candles, oils, bottles, coins, paper, cloth, pins, Psalms, prayers, and personal concerns. Their power comes from context, relationship, knowledge, and intention, not from spooky presentation.",
          "For beginner practice, keep to simple, non-harmful acts: cleaning your home, keeping protective prayers, studying plant safety, lighting a candle mindfully, and honoring ancestors. Do not ingest herbs, burn unknown botanicals, or put oils on skin without safety research.",
          "If you eventually learn from a worker or house, record who taught you what, what lineage it belongs to, and what you were told not to share."
        ],
        remember: "The ordinary object is often the ritual object."
      }
    ]
  },
  {
    id: "ifa-orisha",
    eyebrow: "Yoruba",
    title: "Ifa and Orisha Orientation",
    summary: "Introductory concepts without pretending to replace elders, lineage, or initiation.",
    accent: "#c9d7a0",
    lessons: [
      {
        title: "Ifa",
        body: [
          "Ifa is a Yoruba divination system associated with Orunmila, wisdom, destiny, and a vast body of oral literature. William Bascom's study emphasizes divination as communication between divine powers and human beings through trained specialists.",
          "UNESCO recognizes Ifa as intangible cultural heritage practiced among Yoruba communities and in the African diaspora. That recognition is about safeguarding a living knowledge system, not turning it into open internet content.",
          "For a beginner, the right posture is study and humility: learn terms, learn history, and seek reputable elders before asking for divination or initiation."
        ],
        remember: "Ifa is a discipline of trained interpretation, not a random oracle."
      },
      {
        title: "Orisha",
        body: [
          "Orisha are not simply characters in a pantheon. Britannica's overview describes them as complex presences where divine power, natural force, ancestry, community, and consecrated objects meet.",
          "Different branches and places honor orisha differently. Oshun, Yemaya/Yemoja, Ogun, Shango, Obatala, Oya, Eshu/Elegba, and Orunmila may be familiar names, but their songs, foods, taboos, colors, and ritual forms are not universal across every lineage.",
          "Beginner respect can include learning correct names, avoiding caricature, supporting initiated teachers, and not making promises or offerings you cannot responsibly keep."
        ],
        remember: "The orisha are approached through relationship, lineage, and right conduct."
      }
    ]
  },
  {
    id: "lwa",
    eyebrow: "Spirits",
    title: "Lwa, Ancestors, and Spirit Relations",
    summary: "A cautious overview of lwa language, ancestor remembrance, and why elders matter.",
    accent: "#b8a7d9",
    lessons: [
      {
        title: "Lwa and Loa",
        body: [
          "In Haitian Vodou and related diaspora contexts, lwa or loa are spirits served through song, rhythm, offering, possession, and house tradition. Maya Deren's Divine Horsemen is especially useful for understanding the seriousness of embodied ritual and service.",
          "Some names also circulate in Louisiana contexts, including Legba, Damballah, Ezili, Ogou, Gede, Simbi, and Agwe. Public summaries can orient you, but service belongs to lineages and communities.",
          "Do not treat lwa as aesthetics or interchangeable archetypes. If a spirit is approached in a living religion, the safest beginner act is learning, respect, and restraint."
        ],
        remember: "Service is not the same as curiosity."
      },
      {
        title: "Ancestors",
        body: [
          "Ancestor reverence appears across many African and African diasporic traditions, but it is not one single practice everywhere. It can include remembrance, prayer, offerings, care for graves, moral accountability, and family history work.",
          "A beginner ancestor space can be simple: water, a clean cloth, names, photos of beloved dead when culturally appropriate, flowers, and a notebook. Avoid placing photos of the living on an ancestor altar.",
          "If family history is painful, start with well ancestors of blood, spirit, craft, and community. You do not have to romanticize harmful relatives to practice remembrance."
        ],
        remember: "Ancestor work begins with care, truth, and cleanliness."
      }
    ]
  }
];

const practices = [
  {
    id: "daily",
    title: "Seven-Minute Daily Rhythm",
    badge: "Beginner",
    steps: [
      "Wash your hands and tidy the altar or study surface.",
      "Refresh a glass of water for ancestors or for clarity of mind.",
      "Light a candle or switch on an LED candle. Never leave flame unattended.",
      "Speak gratitude in your own words. Keep it honest and brief.",
      "Read one paragraph from a source, then write one sentence in the journal.",
      "Close by thanking your ancestors, teachers, and guardians of the path.",
      "Put out flame, clean spills, and keep food offerings from spoiling."
    ]
  },
  {
    id: "altar",
    title: "Beginner Altar Styling",
    badge: "Altar",
    steps: [
      "Choose a stable surface away from pets, curtains, vents, and clutter.",
      "Use a simple cloth in white, cream, deep green, blue, or another color that feels clean and calm.",
      "Add water, a candle or lamp, flowers, a small bowl, shells or stones, and a notebook.",
      "Use family photos only for the dead you are intentionally remembering; keep photos of living people elsewhere.",
      "Avoid spirit-specific foods, colors, seals, veves, or promises until an elder in that tradition guides you.",
      "Keep it beautiful, but let care matter more than decoration."
    ]
  },
  {
    id: "research",
    title: "Study Session Template",
    badge: "Study",
    steps: [
      "Pick one tradition for the session: Louisiana Voodoo, Hoodoo, Haitian Vodou, Ifa, or Orisha worship.",
      "Write the source title, author, page, and one paraphrased idea.",
      "Mark whether the information is historical, devotional, practical, folklore, commercial, or initiatory.",
      "Add one question to ask a qualified teacher later.",
      "Do not turn a closed or unclear ritual description into personal practice."
    ]
  },
  {
    id: "community",
    title: "Finding Teachers Carefully",
    badge: "Discernment",
    steps: [
      "Look for lineage transparency, community accountability, and respectful handling of money.",
      "Ask what tradition or house they belong to, what they are authorized to teach, and what beginners should avoid.",
      "Be wary of urgency, fear-based sales, guaranteed results, spiritual threats, or pressure to buy expensive rites immediately.",
      "Keep notes after conversations, especially names, dates, claims, and next steps.",
      "Let time reveal character. Good teachers usually do not need to rush you."
    ]
  }
];

const spirits = [
  {
    group: "Lwa / Louisiana and Haitian Contexts",
    cards: [
      { name: "Legba", role: "Crossroads, gates, permission, communication.", note: "Often approached first in Haitian contexts; public learning is fine, formal service needs guidance." },
      { name: "Damballah", role: "Serpent, sky, continuity, coolness, ancestral depth.", note: "Avoid reducing serpent imagery to fear; it often signals sacred continuity and life." },
      { name: "Ezili", role: "Love, refinement, grief, motherhood, fierce protection in different forms.", note: "Names like Freda and Danto are not interchangeable personalities." },
      { name: "Ogou", role: "Iron, war, labor, politics, heat, tools, defense.", note: "Related in broad diaspora memory to iron and warrior power, but served by house rule." },
      { name: "Gede", role: "Death, humor, the cemetery, truth-telling, fertility, boundary crossing.", note: "Respect cemetery and death work laws, safety, and local custom." },
      { name: "Simbi", role: "Water, serpentine force, communication, knowledge, sometimes magic.", note: "A name with multiple local forms; do not assume one universal profile." }
    ]
  },
  {
    group: "Orisha / Yoruba and Diaspora Contexts",
    cards: [
      { name: "Eshu / Elegba", role: "Roads, messages, choice, thresholds, consequence.", note: "Names and ritual rules differ by tradition; do not equate every crossroads figure." },
      { name: "Orunmila", role: "Wisdom, Ifa, destiny, trained divination.", note: "Ifa divination belongs with trained diviners and lineage protocols." },
      { name: "Oshun", role: "Fresh water, beauty, sweetness, diplomacy, fertility, wealth.", note: "Sweetness is power, not softness alone." },
      { name: "Yemaya / Yemoja", role: "Waters, motherhood, protection, vast nurture.", note: "Spellings and associations vary across Yoruba, Lucumi, Candomble, and popular contexts." },
      { name: "Ogun", role: "Iron, roads, labor, technology, tools, clearing obstacles.", note: "Honor practical work and responsible use of tools before symbolism." },
      { name: "Shango", role: "Thunder, justice, kingship, charisma, disciplined fire.", note: "Public stories are not the same as lineage teaching." },
      { name: "Obatala", role: "Clarity, whiteness, cool head, formation, ethics.", note: "Coolness and character are recurring values in many Yoruba religious discussions." },
      { name: "Oya", role: "Wind, storm, cemetery gates, transformation, market force.", note: "Approach as living religious presence, not a mood board." }
    ]
  }
];

const glossary = [
  ["Ancestor reverence", "Care, remembrance, prayer, and moral relationship with the dead who remain part of community life."],
  ["Babalawo", "A trained Ifa diviner in Yoruba tradition; the title is not self-appointed."],
  ["Conjure", "African American spiritual work often involving prayer, roots, charms, protection, healing, and practical problem solving."],
  ["Congo Square", "A New Orleans gathering place central to public memory of African diasporic music, dance, trade, and ceremony."],
  ["Gris-gris", "A protective or luck-bearing charm in Louisiana and broader French/Creole contexts; details vary by worker and tradition."],
  ["Hoodoo", "African American folk-spiritual practice and rootwork tradition shaped by slavery, Christianity, African retentions, and local knowledge."],
  ["Ifa", "Yoruba divination system, sacred literary corpus, and discipline associated with Orunmila."],
  ["Lwa / Loa", "Spirits served in Haitian Vodou and related diaspora traditions."],
  ["Orisha", "Yoruba and diaspora divine presences linked with natural forces, ancestry, community, and consecrated objects."],
  ["Rootworker", "A practitioner of conjure/rootwork who works with spiritual and material remedies."],
  ["Syncretism", "The blending, masking, or co-presence of religious forms under historical contact and pressure."],
  ["Vodou / Voodoo / Vodun", "Related but distinct terms. Spelling often signals context: Haitian Vodou, Louisiana Voodoo, West African Vodun."]
];

let state = {
  view: "home",
  activeModule: modules[0].id,
  activePractice: practices[0].id,
  search: "",
  journal: "",
  completed: {}
};
let restoreSearchFocus = false;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    state = { ...state, ...saved, view: "home", search: "" };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveState() {
  const { activeModule, activePractice, journal, completed } = state;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ activeModule, activePractice, journal, completed }));
}

function svgIcon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.spark}</svg>`;
}

function setView(view) {
  state.view = view;
  render();
}

function setModule(id) {
  state.activeModule = id;
  state.view = "study";
  saveState();
  render();
}

function setPractice(id) {
  state.activePractice = id;
  saveState();
  render();
}

function toggleComplete(id) {
  state.completed[id] = !state.completed[id];
  saveState();
  render();
}

function shell(content) {
  const nav = [
    ["home", "Home", "home"],
    ["study", "Study", "book"],
    ["practice", "Altar", "altar"],
    ["spirits", "Spirits", "spark"],
    ["sources", "Sources", "sources"]
  ];
  return `
    <main class="screen">
      ${content}
      <nav class="bottom-nav" aria-label="Primary">
        ${nav.map(([view, label, icon]) => `
          <button class="${state.view === view ? "active" : ""}" data-view="${view}" aria-label="${label}">
            ${svgIcon(icon)}
            <span>${label}</span>
          </button>
        `).join("")}
      </nav>
    </main>
  `;
}

function topbar(title, subtitle = "", back = false) {
  return `
    <header class="topbar">
      ${back ? `<button class="icon-button" data-view="home" aria-label="Back">${svgIcon("back")}</button>` : `<div></div>`}
      <div>
        <p class="app-kicker">Keep It Off You</p>
        <h1>${title}</h1>
        ${subtitle ? `<p>${subtitle}</p>` : ""}
      </div>
      <button class="icon-button" data-view="sources" aria-label="Sources">${svgIcon("sources")}</button>
    </header>
  `;
}

function renderHome() {
  const completedCount = Object.values(state.completed).filter(Boolean).length;
  return shell(`
    <section class="hero">
      <div class="hero-copy">
        <p class="app-kicker">Louisiana Voodoo study companion</p>
        <h1>Keep It Off You</h1>
        <p>A private beginner guide for studying Louisiana Voodoo, Hoodoo, Ifa, Orisha traditions, lwa, ancestors, and altar care with respect.</p>
        <div class="hero-actions">
          <button class="primary" data-view="study">${svgIcon("book")} Start Studying</button>
          <button class="ghost" data-view="practice">${svgIcon("altar")} Altar Guide</button>
        </div>
      </div>
      <img src="assets/altar-banner.png" alt="Abstract candle, bowl, shells, herbs, water, and crossroads visual" class="hero-art">
    </section>

    <section class="notice">
      <strong>Beginner-safe boundary</strong>
      <p>This app is for study, remembrance, and preparation. It does not replace initiation, divination, a house, an elder, or lineage-specific instruction.</p>
    </section>

    <section class="stat-strip">
      <article><span>${modules.length}</span><p>study modules</p></article>
      <article><span>${glossary.length}</span><p>glossary terms</p></article>
      <article><span>${completedCount}</span><p>marked complete</p></article>
    </section>

    <section class="module-grid">
      ${modules.map((module) => `
        <button class="module-card" data-module="${module.id}" style="--accent:${module.accent}">
          <span>${module.eyebrow}</span>
          <strong>${module.title}</strong>
          <p>${module.summary}</p>
        </button>
      `).join("")}
    </section>
  `);
}

function renderStudy() {
  const active = modules.find((module) => module.id === state.activeModule) || modules[0];
  return shell(`
    ${topbar("Study", "History, vocabulary, and respectful orientation.", true)}
    <div class="segmented">
      ${modules.map((module) => `<button class="${active.id === module.id ? "active" : ""}" data-module="${module.id}">${module.eyebrow}</button>`).join("")}
    </div>
    <section class="study-panel" style="--accent:${active.accent}">
      <div class="panel-heading">
        <span>${active.eyebrow}</span>
        <h2>${active.title}</h2>
        <p>${active.summary}</p>
      </div>
      ${active.lessons.map((lesson, index) => `
        <article class="lesson">
          <div class="lesson-title">
            <h3>${lesson.title}</h3>
            <button class="${state.completed[`${active.id}-${index}`] ? "done" : ""}" data-complete="${active.id}-${index}" aria-label="Mark lesson complete">
              ${svgIcon("check")}
            </button>
          </div>
          ${lesson.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          <aside>${lesson.remember}</aside>
        </article>
      `).join("")}
    </section>
  `);
}

function renderPractice() {
  const active = practices.find((practice) => practice.id === state.activePractice) || practices[0];
  return shell(`
    ${topbar("Altar + Practice", "Simple, clean, non-initiatory routines.", true)}
    <section class="practice-layout">
      <div class="practice-tabs">
        ${practices.map((practice) => `<button class="${active.id === practice.id ? "active" : ""}" data-practice="${practice.id}">${practice.title}</button>`).join("")}
      </div>
      <article class="practice-card">
        <span>${active.badge}</span>
        <h2>${active.title}</h2>
        <ol>
          ${active.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </article>
    </section>

    <section class="journal">
      <div>
        <span>Private notes</span>
        <h2>Study Journal</h2>
        <p>Saved only in this browser. Good for questions, dreams, source notes, and altar observations.</p>
      </div>
      <textarea id="journal" placeholder="Date, source, question, observation...">${escapeHtml(state.journal)}</textarea>
    </section>
  `);
}

function renderSpirits() {
  const query = state.search.trim().toLowerCase();
  const filteredGlossary = glossary.filter(([term, def]) => `${term} ${def}`.toLowerCase().includes(query));
  return shell(`
    ${topbar("Spirits + Glossary", "Reference cards with tradition boundaries.", true)}
    <label class="search-box">
      ${svgIcon("search")}
      <input id="search" value="${escapeAttr(state.search)}" placeholder="Search glossary">
    </label>
    ${spirits.map((group) => `
      <section class="spirit-section">
        <h2>${group.group}</h2>
        <div class="spirit-grid">
          ${group.cards.map((card) => `
            <article class="spirit-card">
              <h3>${card.name}</h3>
              <p>${card.role}</p>
              <small>${card.note}</small>
            </article>
          `).join("")}
        </div>
      </section>
    `).join("")}
    <section class="glossary">
      <h2>Glossary</h2>
      ${filteredGlossary.map(([term, def]) => `
        <details>
          <summary>${term}</summary>
          <p>${def}</p>
        </details>
      `).join("") || `<p class="empty">No matching terms yet.</p>`}
    </section>
  `);
}

function renderSources() {
  return shell(`
    ${topbar("Sources", "Public links plus your local PDF library.", true)}
    <section class="source-panel">
      <h2>Public References</h2>
      ${publicSources.map((source) => `
        <article>
          <a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>
          <p>${source.note}</p>
        </article>
      `).join("")}
    </section>
    <section class="source-panel">
      <h2>Local PDF Sources Used for Direction</h2>
      <p class="source-note">These PDFs are not bundled into the app. I used them as local study references and paraphrased the app content.</p>
      <ul>
        ${localSources.map((source) => `<li>${source}</li>`).join("")}
      </ul>
    </section>
  `);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

function render() {
  const app = document.getElementById("app");
  const views = {
    home: renderHome,
    study: renderStudy,
    practice: renderPractice,
    spirits: renderSpirits,
    sources: renderSources
  };
  app.innerHTML = (views[state.view] || renderHome)();
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  document.querySelectorAll("[data-module]").forEach((button) => {
    button.addEventListener("click", () => setModule(button.dataset.module));
  });
  document.querySelectorAll("[data-practice]").forEach((button) => {
    button.addEventListener("click", () => setPractice(button.dataset.practice));
  });
  document.querySelectorAll("[data-complete]").forEach((button) => {
    button.addEventListener("click", () => toggleComplete(button.dataset.complete));
  });
  const journal = document.getElementById("journal");
  if (journal) {
    journal.addEventListener("input", (event) => {
      state.journal = event.target.value;
      saveState();
    });
  }
  const search = document.getElementById("search");
  if (search) {
    if (restoreSearchFocus) {
      try {
        search.focus({ preventScroll: true });
      } catch {
        search.focus();
      }
      search.setSelectionRange(search.value.length, search.value.length);
      restoreSearchFocus = false;
    }
    search.addEventListener("input", (event) => {
      state.search = event.target.value;
      restoreSearchFocus = true;
      render();
    });
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

loadState();
render();
