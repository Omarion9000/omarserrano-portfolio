const es = {
  meta: {
    title: "Omar Serrano — Developer · IA · Automatización · SaaS",
    description:
      "Developer bilingüe en Toronto. Chatbots con IA, automatizaciones y SaaS a medida — que de verdad se entrega.",
  },
  nav: {
    about: "Sobre mí",
    work: "Proyectos",
    services: "Servicios",
    contact: "Contacto",
  },
  hero: {
    name: "Omar Serrano",
    role: "Developer · IA · Automatización",
    location: "Toronto, GTA",
    languages: "EN · ES · FR",
    tagline: "Pienso. Construyo. Entrego.",
    whoami: "Developer bilingüe · Toronto",
    interests: "IA · automatización · SaaS · voice agents",
    playlistTitle: "Building in public",
    playlistMeta: "Experimentos con IA, flujos n8n, voice agents",
    ticketTitle: "CODE × CRAFT",
    ticketEst: "EST. 2019 → HOY",
    ticketLocation: "Toronto · Remoto · Mundial",
    sparkText: "Construyo con IA,",
    sparkSuffix: "prototipando ideas en el borde de lo posible.",
    middleText: "Convierto ideas crudas",
    middleHighlight: "en producto entregado",
    middleSuffix: "con equipos que se mueven rápido.",
  },
  about: {
    heading: "Sobre mí",
    postit:
      "Me importa el oficio: interfaces claras, edge cases resueltos y entregar cosas que la gente realmente usa.",
    body: [
      "Soy developer en Toronto, trabajando en tres idiomas y tres problemas: IA conversacional, automatización y SaaS a medida.",
      "Me gustan los sistemas que hacen su trabajo en silencio — el chatbot que responde bien a las 2am, la automatización que corre seis meses sin que nadie la toque, el dashboard que el equipo abre cada lunes.",
    ],
  },
  services: {
    heading: "Lo que construyo",
    items: [
      {
        key: "chatbots",
        title: "Chatbots con IA",
        desc: "Agentes conversacionales bilingües (EN/ES) con contexto, memoria y handoff humano.",
        tag: "OpenAI · Anthropic · RAG",
      },
      {
        key: "automation",
        title: "Automatización",
        desc: "n8n, Make, Node a medida — el back-office en piloto automático.",
        tag: "n8n · Make · Zapier · Node",
      },
      {
        key: "voice",
        title: "Voice Agents",
        desc: "Flujos de voz entrantes y salientes. Multilingües, con escalado a humano.",
        tag: "Vapi · Retell · Twilio",
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
    subheading: "Algunas cosas que he construido.",
    items: [
      {
        key: "sophia",
        title: "Sophia",
        desc: "Asistente de IA bilingüe. Contexto, memoria y uso de herramientas.",
        tag: "IA · EN/ES",
      },
      {
        key: "n8n-suite",
        title: "Suite de Automatización",
        desc: "Workflows n8n que reemplazan operaciones manuales en PyMEs.",
        tag: "Automatización",
      },
      {
        key: "voice-agent",
        title: "Recepcionista de Voz",
        desc: "Agente de voz bilingüe 24/7 para empresas de servicios.",
        tag: "Voz · EN/ES",
      },
      {
        key: "saas-client",
        title: "SaaS cliente",
        desc: "Dashboard a medida, billing, auth multi-tenant.",
        tag: "SaaS",
      },
      {
        key: "portfolio",
        title: "Este portfolio",
        desc: "Next.js, matter-js, framer-motion. El sitio en el que estás.",
        tag: "Open source",
      },
    ],
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
    placeholder: "Pregúntale a Sophia…",
    open: "Hablar con Sophia",
    title: "sophia — asistente de ia",
    welcome:
      "Hola, soy Sophia. Puedo responder sobre el trabajo, servicios y disponibilidad de Omar. (Backend conectándose pronto.)",
    stub: "Soy un placeholder por ahora. Cuando el backend de Sophia esté listo, respondo de verdad.",
  },
  footer: {
    builtWith: "Hecho con Next.js, Tailwind, framer-motion y matter-js.",
    rights: "© 2026 Omar Serrano. Todos los derechos reservados.",
  },
} as const;

export default es;
