const fr = {
  meta: {
    title: "Omar Serrano — Développeur · IA · Automatisation · SaaS",
    description:
      "Développeur bilingue à Toronto. Chatbots IA, automatisation et SaaS sur mesure — livrés.",
  },
  nav: {
    about: "À propos",
    work: "Projets",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    name: "Omar Serrano",
    role: "Développeur · IA · Automatisation",
    location: "Toronto, GTA",
    languages: "EN · ES · FR",
    tagline: "Je conçois, puis je livre.",
    whoami: "Développeur bilingue · Toronto",
    interests: "IA · automatisation · SaaS · agents vocaux",
    playlistTitle: "Building in public",
    playlistMeta: "Expériences IA, flux n8n, agents vocaux",
    ticketTitle: "CODE × CRAFT",
    ticketEst: "EST. 2019 → AUJOURD'HUI",
    ticketLocation: "Toronto · À distance · Mondial",
    sparkText: "Je construis avec l'IA,",
    sparkSuffix: "en prototypant aux frontières du possible.",
    middleText: "Je transforme les idées brutes",
    middleHighlight: "en produits livrés",
    middleSuffix: "avec des équipes rapides.",
  },
  about: {
    heading: "À propos",
    postit:
      "Je me soucie du métier : interfaces claires, cas limites traités, et livrer des choses utiles.",
    body: [
      "Développeur basé à Toronto, je travaille en trois langues sur trois domaines : IA conversationnelle, automatisation, et SaaS sur mesure.",
      "J'aime les systèmes qui font leur travail en silence — le chatbot qui répond bien à 2h du matin, l'automatisation qui tourne six mois sans intervention, le tableau de bord ouvert chaque lundi.",
    ],
  },
  services: {
    heading: "Ce que je construis",
    items: [
      {
        key: "chatbots",
        title: "Chatbots IA",
        desc: "Agents conversationnels bilingues (EN/ES) avec contexte, mémoire et passage à un humain.",
        tag: "OpenAI · Anthropic · RAG",
      },
      {
        key: "automation",
        title: "Automatisation",
        desc: "n8n, Make, Node sur mesure — le back-office en pilote automatique.",
        tag: "n8n · Make · Zapier · Node",
      },
      {
        key: "voice",
        title: "Agents vocaux",
        desc: "Flux vocaux entrants et sortants. Multilingues, avec escalade humaine.",
        tag: "Vapi · Retell · Twilio",
      },
      {
        key: "saas",
        title: "SaaS et apps sur mesure",
        desc: "Du brief au déploiement. Next.js, TypeScript, Supabase, Stripe.",
        tag: "Next.js · Supabase · Stripe",
      },
    ],
  },
  work: {
    heading: "Projets",
    subheading: "Quelques projets que j'ai construits.",
    items: [
      {
        key: "sophia",
        title: "Sophia",
        desc: "Assistant IA bilingue. Contexte, mémoire et utilisation d'outils.",
        tag: "IA · EN/ES",
      },
      {
        key: "n8n-suite",
        title: "Suite d'automatisation",
        desc: "Workflows n8n remplaçant les opérations manuelles pour les PME.",
        tag: "Automatisation",
      },
      {
        key: "voice-agent",
        title: "Réceptionniste vocal",
        desc: "Agent vocal bilingue 24/7 pour entreprises de services.",
        tag: "Voix · EN/ES",
      },
      {
        key: "saas-client",
        title: "SaaS client",
        desc: "Tableau de bord sur mesure, facturation, auth multi-tenant.",
        tag: "SaaS",
      },
      {
        key: "portfolio",
        title: "Ce portfolio",
        desc: "Next.js, matter-js, framer-motion. Le site que vous lisez.",
        tag: "Open source",
      },
    ],
  },
  contact: {
    heading: "Contact",
    prompt: "Tapez une commande — ou cliquez ci-dessous.",
    welcome: [
      "omar@toronto ~ $ whoami",
      "Omar Serrano — développeur bilingue, Toronto GTA.",
      "omar@toronto ~ $ ls contact/",
      "email   linkedin   github   aide",
    ],
    commands: {
      email: "email",
      linkedin: "linkedin",
      github: "github",
      help: "aide",
      clear: "effacer",
    },
    helpText: [
      "Commandes disponibles :",
      "  email      → ouvrir le client mail",
      "  linkedin   → ouvrir le profil",
      "  github     → ouvrir le profil",
      "  effacer    → effacer le terminal",
      "  aide       → afficher ce message",
    ],
    unknown: "commande introuvable : $cmd. Tapez 'aide' pour les commandes.",
  },
  chat: {
    placeholder: "Demandez à Sophia…",
    open: "Parler à Sophia",
    title: "sophia — assistant ia",
    welcome:
      "Bonjour, je suis Sophia. Je peux répondre sur le travail, les services et la disponibilité d'Omar. (Backend bientôt connecté.)",
    stub: "Je suis un placeholder pour l'instant. Quand le backend de Sophia sera prêt, je répondrai pour de vrai.",
  },
  footer: {
    builtWith: "Construit avec Next.js, Tailwind, framer-motion et matter-js.",
    rights: "© 2026 Omar Serrano. Tous droits réservés.",
  },
} as const;

export default fr;
