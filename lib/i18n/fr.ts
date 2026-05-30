const fr = {
  meta: {
    title: "Omar Serrano — Développeur IA & Automatisation · Toronto",
    description:
      "Développeur full-stack bilingue EN/ES à Toronto. J'aide les entreprises à gagner 10+ heures par semaine avec chatbots, agents vocaux et automatisations.",
  },
  nav: {
    about: "À propos",
    work: "Projets",
    stack: "Stack",
    services: "Services",
    resume: "CV",
    contact: "Contact",
  },
  hero: {
    name: "Omar Serrano",
    role: "Développeur IA & Automatisation",
    location: "Toronto, GTA",
    languages: "EN · ES · FR",
    tagline: "Concevoir des systèmes. Livrer des expériences.",
    whoami: "Développeur bilingue · Toronto",
    interests: "IA · automatisation · SaaS · agents vocaux",
    playlistTitle: "Building in public",
    playlistMeta: "Expériences IA, flux n8n, agents vocaux",
    ticketTitle: "CODE × CRAFT",
    ticketEst: "EST. 2019 → AUJOURD'HUI",
    ticketLocation: "Toronto · À distance · Mondial",
    intro:
      "J'aide les entreprises de Toronto à gagner 10+ heures par semaine avec des chatbots bilingues, des agents vocaux et de l'automatisation. Bilingue EN/ES — basé à la GTA.",
    sparkText: "Je construis avec l'IA,",
    sparkSuffix: "en prototypant aux frontières du possible.",
    middleText: "Je transforme les idées brutes",
    middleHighlight: "en produits livrés",
    middleSuffix: "avec des équipes rapides.",
    postit: "n'abandonne jamais !",
  },
  about: {
    heading: "À propos",
    postit:
      "Je me soucie du métier : interfaces claires, cas limites traités, et livrer des choses utiles.",
    body: [
      "Développeur basé à Toronto, je travaille en trois langues sur trois domaines : IA conversationnelle, automatisation, et SaaS sur mesure.",
      "J'aime les systèmes qui font leur travail en silence — le chatbot qui répond bien à 2h du matin, l'automatisation qui tourne six mois sans intervention, le tableau de bord ouvert chaque lundi.",
    ],
    dashboard: {
      journeyLabel: "mon parcours",
      certifiedLabel: "certifications",
      currentlyLabel: "en construction",
      nowBadge: "ACTUEL",
      currentlyText:
        "Réceptionnistes IA bilingues, flux Power Apps + Automate (30% de gains d'efficacité), agents vocaux et automatisations back-office qui tournent des mois sans intervention.",
      journey: [
        {
          title: "ESCI — Commerce International",
          meta: "Mexique · 2018–2022",
          detail: "Modèle ONU · base interculturelle",
        },
        {
          title: "Meraki Creative Lab — Développeur",
          meta: "Mexique · 2023–2025 · À distance",
        },
        {
          title: "Georgian College — Computer Programming",
          meta: "Toronto · 2023–2025",
        },
        {
          title: "Développeur IA & Automatisation",
          meta: "Indépendant · 2025–présent · Toronto",
          current: true,
        },
      ],
      certs: [
        { title: "Microsoft Azure Fundamentals", meta: "AZ-900 · 2025" },
        { title: "Azure DevOps", meta: "2025" },
      ],
    },
  },
  stack: {
    heading: "Stack",
    subheading: "Ce que j'utilise au quotidien.",
    postits: [
      {
        key: "frontend",
        title: "frontend",
        color: "amber",
        items: [
          { name: "Next.js", icon: "next" },
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "ts" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "framer-motion", icon: "motion" },
        ],
      },
      {
        key: "ai-automation",
        title: "ia & automatisation",
        color: "mint",
        items: [
          { name: "Anthropic Claude", icon: "claude" },
          { name: "OpenAI", icon: "openai" },
          { name: "Supabase", icon: "supabase" },
          { name: "n8n", icon: "n8n" },
          { name: "Make", icon: "make" },
        ],
      },
      {
        key: "cloud-tools",
        title: "cloud & tools",
        color: "terracotta",
        items: [
          { name: "Vercel", icon: "vercel" },
          { name: "Azure (AZ-900)", icon: "azure" },
          { name: "Node.js", icon: "node" },
          { name: "PostgreSQL", icon: "postgres" },
          { name: "Git", icon: "git" },
        ],
      },
    ],
  },
  services: {
    heading: "Ce que je construis",
    items: [
      {
        key: "chatbots",
        title: "Chatbots IA",
        desc: "Agents conversationnels bilingues (EN/ES) avec contexte, mémoire et passage à un humain.",
        tag: "Claude · OpenAI · RAG",
      },
      {
        key: "automation",
        title: "Automatisation",
        desc: "n8n, Make, Node sur mesure — le back-office en pilote automatique.",
        tag: "n8n · Make · Node",
      },
      {
        key: "voice",
        title: "Agents vocaux",
        desc: "Flux vocaux entrants et sortants. Multilingues, avec escalade humaine.",
        tag: "Vapi · Twilio",
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
    subheading: "Des choses que j'ai construites et livrées.",
    items: [
      {
        key: "francaisia",
        title: "Francaisia",
        desc: "Plateforme de préparation au TEF Canada. Visée B2/CLB7 avec 92 leçons (A0–B2), audio généré par IA et i18n complet. Next.js 16 + Supabase + Claude API + Stripe.",
        tag: "SaaS · Production · 2026",
        href: "https://francaisia.com",
        image: "/work/francaisia.png",
      },
      {
        key: "prave",
        title: "PRAVÉ",
        desc: "SaaS en production — plateforme de simulation CRS Express Entry avec facturation Stripe, auth Supabase et analyse de scénarios par IA. Bilingue EN/ES.",
        tag: "SaaS · Production",
        href: "https://www.pravepath.ca",
        image: "/work/prave.webp",
      },
      {
        key: "sofia",
        title: "Sofia",
        desc: "Démo de réceptionniste IA bilingue. Construit avec l'API Anthropic Claude, backend serverless rate-limited, contexte complet.",
        tag: "IA · API Claude",
        href: "#contact",
        image: "/work/sofia.webp",
      },
      {
        key: "jesse",
        title: "Jesse Merineau",
        desc: "Site web pour artiste musical. Intégration Spotify, layout multi-sections responsive. Travail client via Meraki Creative Lab.",
        tag: "Client · Musique",
        href: "https://jessemerineau.omarserrano.ca",
        image: "/work/jesse-merineau.webp",
      },
      {
        key: "pokemon",
        title: "Pokémon Battle Arena",
        desc: "Projet perso : simulateur de combat Gen 1 au tour par tour avec interface holographique style JCC. Next.js + XState + TypeScript.",
        tag: "Projet perso · Next.js · XState",
        href: "https://pokemon.omarserrano.ca",
        image: "/work/pokemon-arena.png",
      },
      {
        key: "qr",
        title: "Générateur de QR",
        desc: "Utilitaire léger pour générer des codes QR à partir d'URLs et de texte, avec historique local.",
        tag: "Utilitaire · React",
        href: "https://qrgenerator-1-c9fn.onrender.com",
        image: "/work/qr-generator.webp",
      },
    ],
  },
  resume: {
    heading: "CV",
    subheading: "Version courte.",
    folderLabel: "RESUME.pdf",
    download: "Télécharger PDF",
    viewOnline: "Voir en ligne",
    badge: "Certifié AZ-900",
    summary:
      "Développeur IA & Automatisation à Toronto. Bilingue EN/ES, FR basique. Disponible pour travail à distance.",
    page: {
      role: "Développeur en IA et automatisation · Ingénieur full-stack",
      location: "Toronto, ON",
      downloadCta: "↓ Télécharger le PDF",
      sections: {
        summary: "Résumé",
        skills: "Compétences",
        projects: "Projets vedettes",
        experience: "Expérience",
        education: "Formation et certifications",
      },
      summaryBody:
        "Développeur full-stack bilingue EN/ES spécialisé en intégration de l'IA et automatisation des flux de travail. Je développe actuellement Francaisia (plateforme de préparation au TEF Canada, soft-launch en juillet 2026) et PRAVÉ (SaaS en production pour la simulation CRS d'Entrée express canadienne, avec facturation par abonnement Stripe). Expérience avec les assistants virtuels d'IA via l'API Anthropic Claude. Certifié Microsoft Azure Fundamentals. J'aide les entreprises à économiser plus de 10 heures par semaine avec des chatbots, des agents vocaux et des applications web sur mesure. Basé à Toronto, disponible pour le travail à distance partout dans le monde.",
      skills: [
        { label: "Frontend", value: "Next.js, React, TypeScript, Tailwind CSS, framer-motion, XState" },
        { label: "Backend", value: "Node.js, Express, API REST, PostgreSQL, Supabase" },
        { label: "IA et automatisation", value: "API Anthropic Claude, OpenAI, n8n, Make, Vapi, Twilio" },
        { label: "Infonuagique et DevOps", value: "Microsoft Azure (AZ-900), Vercel, Render, Git, Linux" },
        { label: "Langues", value: "Anglais (Courant) · Espagnol (Natif) · Français (Niveau de base)" },
      ],
      projects: [
        {
          title: "Francaisia — Préparation au TEF Canada",
          href: "https://francaisia.com",
          linkLabel: "francaisia.com",
          desc:
            "Plateforme d'apprentissage du français visée B2/CLB7 avec 92 leçons (A0–B2), audio voix généré par IA, trame narrative québécoise, facturation Stripe et i18n complet. Next.js 16 + Supabase + Claude API.",
        },
        {
          title: "PRAVÉ — Simulation CRS d'Entrée express",
          href: "https://www.pravepath.ca",
          linkLabel: "pravepath.ca",
          desc:
            "SaaS en production développé en solo avec facturation Stripe, authentification Supabase + RLS, interface bilingue EN/ES et analyse de scénarios propulsée par l'API Claude.",
        },
        {
          title: "Sofia — Réceptionniste IA bilingue",
          href: null,
          linkLabel: "démo",
          desc:
            "Réceptionniste virtuelle alimentée par l'IA avec l'API Anthropic Claude, contexte de conversation, limitation de débit et détection automatique bilingue EN/ES.",
        },
        {
          title: "Pokémon Battle Arena",
          href: "https://pokemon.omarserrano.ca",
          linkLabel: "pokemon.omarserrano.ca",
          desc:
            "Simulateur de combat Gen 1 au tour par tour avec interface holographique style JCC. Next.js 14 + XState v5 + TypeScript. 77 tests, 151 Pokémon prérendus comme Server Components.",
        },
        {
          title: "Jesse Merineau — Site web musical",
          href: "https://jessemerineau.omarserrano.ca",
          linkLabel: "jessemerineau.omarserrano.ca",
          desc:
            "Site multipage d'artiste avec React Router, intégration Spotify et vidéo en vedette YouTube. Vite + React + Tailwind.",
        },
      ],
      experience: [
        {
          title: "Fondateur · PRAVÉ et Francaisia (Travailleur autonome)",
          dates: "Mai 2025 – Présent",
          location: "Toronto, ON, Canada",
          bullets: [
            "J'ai fondé et bâti deux plateformes SaaS de niveau production de bout en bout : PRAVÉ (optimisation du CRS pour l'immigration canadienne, en production avec facturation Stripe) et Francaisia (préparation au TEF Canada, en prélancement)",
            "J'ai architecturé le full stack du produit : Next.js 16 App Router, Supabase (auth + Postgres + RLS), intégration Stripe en production, API Anthropic Claude pour les fonctionnalités d'IA, déployé sur Vercel",
            "J'ai conçu et livré une UX trilingue (EN/ES/FR) avec middleware i18n, moteur de calcul CRS personnalisé et analyse de scénarios par IA",
            "J'ai géré l'ensemble des opérations : stratégie produit, conformité légale (PIPEDA, CICC), infrastructure de paiement, production de contenu et marketing prélancement",
          ],
        },
        {
          title: "Développeur web · Meraki Creative Lab",
          dates: "Mars 2023 – Avr. 2025",
          location: "À distance · Mexico, Mexique",
          bullets: [
            "J'ai dirigé le développement de projets web clients avec Next.js, React, TypeScript et Node.js, livrant plusieurs sites web en production de bout en bout",
            "J'ai conçu et implémenté des API REST et des schémas de base de données avec Node.js, Express et PostgreSQL",
            "J'ai collaboré en environnement Agile avec un flux Git et un déploiement continu via Vercel",
            "J'ai coordonné la portée, les échéanciers et les révisions directement avec les clients en anglais et en espagnol",
          ],
        },
        {
          title: "Préposé au service à la clientèle · The Rec Room",
          dates: "Août 2023 – Mai 2026",
          location: "Toronto, ON, Canada · temps partiel",
          bullets: [
            "J'ai offert un service à la clientèle bilingue EN/ES dans un lieu de divertissement à fort achalandage",
            "J'ai concilié ce poste avec mes études à temps plein et mes rôles de développeur; j'ai démontré ma fiabilité et ma gestion du temps",
          ],
        },
      ],
      education: [
        { name: "Diplôme en programmation informatique", body: "Georgian College · Sept. 2023 – Avr. 2025 · Toronto, ON, Canada" },
        { name: "Baccalauréat en commerce international", body: "Université ESCI · 2018 – 2022 · Mexique" },
        { name: "AZ-900 Azure Fundamentals", body: "Microsoft" },
        { name: null, body: "Diplôme de développeur frontend · Certifications freeCodeCamp (Algorithmes et structures de données en JavaScript, Conception web adaptative)" },
      ],
    },
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
    placeholder: "Tapez un message…",
    open: "Parler à Sofia",
    title: "sofia — réceptionniste ia",
    subtitle: "Smile Dental Toronto · démo",
    welcome:
      "Bonjour ! Je suis Sofia, réceptionniste virtuelle de Smile Dental Toronto. Comment puis-je vous aider aujourd'hui ?",
    banner: "Démo en direct — Construit par Omar avec l'API Claude",
    poweredBy: "Powered by Claude · Démo construite par Omar Serrano",
    tryAsking: "Essayez de demander :",
    suggestions: [
      "Combien coûte un nettoyage ?",
      "Je veux prendre rendez-vous",
      "Quels sont vos horaires ?",
      "J'ai mal aux dents",
    ],
    rateLimit: "Vous avez atteint la limite de messages. Réessayez dans $min minutes.",
    error: "Erreur de connexion. Veuillez réessayer.",
    fallbackReply: "Désolé, je n'ai pas pu répondre.",
  },
  footer: {
    builtWith: "Construit avec Next.js, Tailwind, framer-motion et matter-js.",
    rights: "© 2026 Omar Serrano. Tous droits réservés.",
  },
} as const;

export default fr;
