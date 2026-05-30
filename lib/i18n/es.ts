const es = {
  meta: {
    title: "Omar Serrano — Developer IA & Automatización · Toronto",
    description:
      "Developer full-stack bilingüe EN/ES en Toronto. Ayudo a negocios a ahorrar 10+ horas por semana con chatbots, voice agents y automatizaciones inteligentes.",
  },
  nav: {
    about: "Sobre mí",
    work: "Proyectos",
    stack: "Stack",
    services: "Servicios",
    resume: "CV",
    contact: "Contacto",
  },
  hero: {
    name: "Omar Serrano",
    role: "Developer IA & Automatización",
    location: "Toronto, GTA",
    languages: "EN · ES · FR",
    tagline: "Diseñando sistemas. Entregando experiencias.",
    whoami: "Developer bilingüe · Toronto",
    interests: "IA · automatización · SaaS · voice agents",
    playlistTitle: "Building in public",
    playlistMeta: "Experimentos con IA, flujos n8n, voice agents",
    ticketTitle: "CODE × CRAFT",
    ticketEst: "EST. 2019 → HOY",
    ticketLocation: "Toronto · Remoto · Mundial",
    intro:
      "Ayudo a negocios de Toronto a ahorrar 10+ horas por semana con chatbots bilingües, voice agents y automatizaciones inteligentes. Bilingüe EN/ES — basado en la GTA.",
    sparkText: "Construyo con IA,",
    sparkSuffix: "prototipando ideas en el borde de lo posible.",
    middleText: "Convierto ideas crudas",
    middleHighlight: "en producto entregado",
    middleSuffix: "con equipos que se mueven rápido.",
    postit: "¡nunca te rindas!",
  },
  about: {
    heading: "Sobre mí",
    postit:
      "Me importa el oficio: interfaces claras, edge cases resueltos y entregar cosas que la gente realmente usa.",
    body: [
      "Soy developer en Toronto, trabajando en tres idiomas y tres problemas: IA conversacional, automatización y SaaS a medida.",
      "Me gustan los sistemas que hacen su trabajo en silencio — el chatbot que responde bien a las 2am, la automatización que corre seis meses sin que nadie la toque, el dashboard que el equipo abre cada lunes.",
    ],
    dashboard: {
      journeyLabel: "mi trayectoria",
      certifiedLabel: "certificaciones",
      currentlyLabel: "construyendo ahora",
      nowBadge: "HOY",
      currentlyText:
        "Recepcionistas IA bilingües, flujos Power Apps + Automate (30% más eficiencia), voice agents y automatizaciones de back-office que corren meses sin tocarse.",
      journey: [
        {
          title: "ESCI — Comercio Internacional",
          meta: "México · 2018–2022",
          detail: "Modelo ONU · base intercultural",
        },
        {
          title: "Meraki Creative Lab — Developer",
          meta: "México · 2023–2025 · Remoto",
        },
        {
          title: "Georgian College — Computer Programming",
          meta: "Toronto · 2023–2025",
        },
        {
          title: "Developer IA & Automatización",
          meta: "Autónomo · 2025–presente · Toronto",
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
    subheading: "Lo que uso a diario.",
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
        title: "ia & automatización",
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
    heading: "Lo que construyo",
    items: [
      {
        key: "chatbots",
        title: "Chatbots con IA",
        desc: "Agentes conversacionales bilingües (EN/ES) con contexto, memoria y handoff humano.",
        tag: "Claude · OpenAI · RAG",
      },
      {
        key: "automation",
        title: "Automatización",
        desc: "n8n, Make, Node a medida — el back-office en piloto automático.",
        tag: "n8n · Make · Node",
      },
      {
        key: "voice",
        title: "Voice Agents",
        desc: "Flujos de voz entrantes y salientes. Multilingües, con escalado a humano.",
        tag: "Vapi · Twilio",
      },
      {
        key: "saas",
        title: "SaaS y Web Apps a medida",
        desc: "Del brief al deploy. Next.js, TypeScript, Supabase, Stripe.",
        tag: "Next.js · Supabase · Stripe",
      },
    ],
  },
  work: {
    heading: "Proyectos",
    subheading: "Cosas que he construido y entregado.",
    items: [
      {
        key: "francaisia",
        title: "Francaisia",
        desc: "Plataforma de preparación para el examen TEF Canadá. Orientada a B2/CLB7 con 92 lecciones (A0–B2), audio generado con IA e i18n completo. Next.js 16 + Supabase + Claude API + Stripe.",
        tag: "SaaS · Producción · 2026",
        href: "https://francaisia.com",
        image: "/work/francaisia.png",
      },
      {
        key: "prave",
        title: "PRAVÉ",
        desc: "SaaS en producción — plataforma de simulación CRS de Express Entry con billing Stripe, auth Supabase y análisis de escenarios con IA. Bilingüe EN/ES.",
        tag: "SaaS · Producción",
        href: "https://www.pravepath.ca",
        image: "/work/prave.webp",
      },
      {
        key: "sofia",
        title: "Sofia",
        desc: "Demo de recepcionista IA bilingüe. Construido con Anthropic Claude API, backend serverless con rate-limit y contexto completo de conversación.",
        tag: "IA · Claude API",
        href: "#contact",
        image: "/work/sofia.webp",
      },
      {
        key: "jesse",
        title: "Jesse Merineau",
        desc: "Sitio web para artista musical. Integración con Spotify, layout multi-sección responsive. Trabajo de cliente vía Meraki Creative Lab.",
        tag: "Cliente · Música",
        href: "https://jessemerineau.omarserrano.ca",
        image: "/work/jesse-merineau.webp",
      },
      {
        key: "pokemon",
        title: "Pokémon Battle Arena",
        desc: "Proyecto personal: simulador de batalla Gen 1 por turnos con UI holográfica estilo TCG. Next.js + XState + TypeScript.",
        tag: "Proyecto personal · Next.js · XState",
        href: "https://pokemon.omarserrano.ca",
        image: "/work/pokemon-arena.png",
      },
      {
        key: "qr",
        title: "Generador de QR",
        desc: "Utilidad ligera para generar códigos QR de URLs y texto, con historial local.",
        tag: "Utilidad · React",
        href: "https://qrgenerator-1-c9fn.onrender.com",
        image: "/work/qr-generator.webp",
      },
    ],
  },
  resume: {
    heading: "CV",
    subheading: "Versión corta.",
    folderLabel: "RESUME.pdf",
    download: "Descargar PDF",
    viewOnline: "Ver online",
    badge: "AZ-900 certificado",
    summary:
      "Developer de IA & Automatización en Toronto. Bilingüe EN/ES, FR básico. Disponible para trabajo remoto.",
    page: {
      role: "Desarrollador de IA y Automatización · Ingeniero Full-Stack",
      location: "Toronto, ON",
      downloadCta: "↓ Descargar PDF",
      sections: {
        summary: "Resumen",
        skills: "Habilidades",
        projects: "Proyectos destacados",
        experience: "Experiencia",
        education: "Educación y certificaciones",
      },
      summaryBody:
        "Desarrollador full-stack bilingüe EN/ES especializado en integración de IA y automatización de flujos de trabajo. Actualmente desarrollando Francaisia (plataforma de preparación para el examen TEF Canadá de francés, soft-launch en julio 2026) y PRAVÉ (SaaS en producción para simulación del CRS de Express Entry canadiense, con facturación por suscripción en Stripe). Con experiencia en asistentes virtuales de IA usando la API de Anthropic Claude. Certificado en Microsoft Azure Fundamentals. Ayudo a negocios a ahorrar más de 10 horas por semana con chatbots, voice agents y aplicaciones web a medida. Basado en Toronto, disponible para trabajo remoto a nivel mundial.",
      skills: [
        { label: "Frontend", value: "Next.js, React, TypeScript, Tailwind CSS, framer-motion, XState" },
        { label: "Backend", value: "Node.js, Express, APIs REST, PostgreSQL, Supabase" },
        { label: "IA y automatización", value: "API de Anthropic Claude, OpenAI, n8n, Make, Vapi, Twilio" },
        { label: "Cloud y DevOps", value: "Microsoft Azure (AZ-900), Vercel, Render, Git, Linux" },
        { label: "Idiomas", value: "Inglés (Fluido) · Español (Nativo) · Francés (Básico)" },
      ],
      projects: [
        {
          title: "Francaisia — Preparación para el TEF Canadá",
          href: "https://francaisia.com",
          linkLabel: "francaisia.com",
          desc:
            "Plataforma de aprendizaje de francés orientada a B2/CLB7 con 92 lecciones (A0–B2), audio de voz generado con IA, arco narrativo quebequense, facturación Stripe e i18n completo. Next.js 16 + Supabase + Claude API.",
        },
        {
          title: "PRAVÉ — Simulación CRS de Express Entry",
          href: "https://www.pravepath.ca",
          linkLabel: "pravepath.ca",
          desc:
            "SaaS en producción construido solo con facturación Stripe, auth Supabase + RLS, interfaz bilingüe EN/ES y análisis de escenarios potenciado por la API de Claude.",
        },
        {
          title: "Sofia — Recepcionista de IA bilingüe",
          href: null,
          linkLabel: "demo",
          desc:
            "Recepcionista virtual de IA con la API de Anthropic Claude, contexto de conversación, rate limiting y detección automática bilingüe EN/ES.",
        },
        {
          title: "Pokémon Battle Arena",
          href: "https://pokemon.omarserrano.ca",
          linkLabel: "pokemon.omarserrano.ca",
          desc:
            "Simulador de batalla Gen 1 por turnos con UI holográfica estilo TCG. Next.js 14 + XState v5 + TypeScript. 77 tests, 151 Pokémon prerenderizados como Server Components.",
        },
        {
          title: "Jesse Merineau — Sitio web musical",
          href: "https://jessemerineau.omarserrano.ca",
          linkLabel: "jessemerineau.omarserrano.ca",
          desc:
            "Sitio multipágina de artista con React Router, Spotify embed y video destacado de YouTube. Vite + React + Tailwind.",
        },
      ],
      experience: [
        {
          title: "Fundador · PRAVÉ y Francaisia (Autónomo)",
          dates: "Mayo 2025 – Presente",
          location: "Toronto, ON, Canadá",
          bullets: [
            "Fundé y construí dos plataformas SaaS de nivel producción de extremo a extremo: PRAVÉ (optimización de CRS para inmigración canadiense, en producción con facturación Stripe) y Francaisia (preparación para el TEF Canada, prelanzamiento)",
            "Arquitecté el stack completo del producto: Next.js 16 App Router, Supabase (auth + Postgres + RLS), integración de Stripe en producción, API de Anthropic Claude para funciones de IA, desplegado en Vercel",
            "Diseñé y lancé una UX trilingüe (EN/ES/FR) con middleware de i18n, motor propio de cálculo de CRS y análisis de escenarios con IA",
            "Gestioné las operaciones completas del negocio: estrategia de producto, legal/compliance (PIPEDA, CICC), infraestructura de pagos, producción de contenido y marketing prelanzamiento",
          ],
        },
        {
          title: "Desarrollador Web · Meraki Creative Lab",
          dates: "Mar. 2023 – Abr. 2025",
          location: "Remoto · Ciudad de México, México",
          bullets: [
            "Lideré el desarrollo de proyectos web para clientes con Next.js, React, TypeScript y Node.js, entregando múltiples sitios en producción de extremo a extremo",
            "Diseñé e implementé APIs REST y esquemas de base de datos con Node.js, Express y PostgreSQL",
            "Colaboré en entorno Agile con flujo de trabajo en Git y despliegue continuo vía Vercel",
            "Coordiné alcance, plazos y revisiones directamente con clientes en inglés y español",
          ],
        },
        {
          title: "Asociado de Atención al Cliente · The Rec Room",
          dates: "Ago. 2023 – Mayo 2026",
          location: "Toronto, ON, Canadá · tiempo parcial",
          bullets: [
            "Brindé atención al cliente bilingüe EN/ES en un local de entretenimiento de alto volumen",
            "Lo mantuve en paralelo a mis estudios a tiempo completo y mis roles de desarrollador; demostré confiabilidad y gestión del tiempo",
          ],
        },
      ],
      education: [
        { name: "Diploma en Programación Informática", body: "Georgian College · Sept. 2023 – Abr. 2025 · Toronto, ON, Canadá" },
        { name: "Licenciatura en Comercio Internacional", body: "Universidad ESCI · 2018 – 2022 · México" },
        { name: "AZ-900 Azure Fundamentals", body: "Microsoft" },
        { name: null, body: "Diploma de Desarrollador Frontend · Certificaciones de freeCodeCamp (Algoritmos y Estructuras de Datos en JavaScript, Diseño Web Responsive)" },
      ],
    },
  },
  contact: {
    heading: "Contacto",
    prompt: "Escribe un comando — o haz clic abajo.",
    welcome: [
      "omar@toronto ~ $ whoami",
      "Omar Serrano — developer bilingüe, Toronto GTA.",
      "omar@toronto ~ $ ls contacto/",
      "email   linkedin   github   ayuda",
    ],
    commands: {
      email: "email",
      linkedin: "linkedin",
      github: "github",
      help: "ayuda",
      clear: "limpiar",
    },
    helpText: [
      "Comandos disponibles:",
      "  email      → abrir cliente de correo",
      "  linkedin   → abrir perfil",
      "  github     → abrir perfil",
      "  limpiar    → limpiar terminal",
      "  ayuda      → mostrar este mensaje",
    ],
    unknown: "comando no encontrado: $cmd. Escribe 'ayuda' para ver comandos.",
  },
  chat: {
    placeholder: "Escribe un mensaje…",
    open: "Hablar con Sofia",
    title: "sofia — recepcionista ia",
    subtitle: "Smile Dental Toronto · demo",
    welcome:
      "¡Hola! Soy Sofia, recepcionista virtual de Smile Dental Toronto. ¿En qué puedo ayudarte hoy?",
    banner: "Demo en vivo — Construido por Omar con Claude API",
    poweredBy: "Powered by Claude · Demo construido por Omar Serrano",
    tryAsking: "Prueba preguntando:",
    suggestions: [
      "¿Cuánto cuesta una limpieza?",
      "Quiero agendar una cita",
      "¿Cuál es el horario?",
      "Tengo dolor de muela",
    ],
    rateLimit: "Has alcanzado el límite de mensajes. Intenta de nuevo en $min minutos.",
    error: "Hubo un problema de conexión. Intenta de nuevo.",
    fallbackReply: "Lo siento, no pude responder.",
  },
  footer: {
    builtWith: "Hecho con Next.js, Tailwind, framer-motion y matter-js.",
    rights: "© 2026 Omar Serrano. Todos los derechos reservados.",
  },
} as const;

export default es;
