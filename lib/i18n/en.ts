const en = {
  meta: {
    title: "Omar Serrano — Developer · AI · Automation · SaaS",
    description:
      "Bilingual developer in Toronto building AI chatbots, automation flows, and custom SaaS that actually ships.",
  },
  nav: {
    about: "About",
    work: "Work",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    name: "Omar Serrano",
    role: "Developer · AI · Automation",
    location: "Toronto, GTA",
    languages: "EN · ES · FR",
    tagline: "I think, then I ship.",
    whoami: "Bilingual developer · Toronto",
    interests: "AI · automation · SaaS · voice agents",
    playlistTitle: "Building in public",
    playlistMeta: "AI experiments, n8n flows, voice agents",
    ticketTitle: "CODE × CRAFT",
    ticketEst: "EST. 2019 → PRESENT",
    ticketLocation: "Toronto · Remote · Worldwide",
    sparkText: "I build with AI,",
    sparkSuffix: "prototyping ideas at the edge of what's possible.",
    middleText: "I turn rough ideas",
    middleHighlight: "into shipped products",
    middleSuffix: "with teams that move fast.",
  },
  about: {
    heading: "About",
    postit:
      "I care about craft: clear interfaces, edge cases handled, and shipping things people actually use.",
    body: [
      "I'm a developer from Toronto working across three languages and three problem spaces: conversational AI, workflow automation, and custom SaaS.",
      "I like systems that quietly do their job — the chatbot that answers correctly at 2am, the automation that runs for six months without anyone touching it, the dashboard the team opens every Monday.",
    ],
  },
  services: {
    heading: "What I build",
    items: [
      {
        key: "chatbots",
        title: "AI Chatbots",
        desc: "Bilingual (EN/ES) conversational agents with real context, memory, and human handoff.",
        tag: "OpenAI · Anthropic · RAG",
      },
      {
        key: "automation",
        title: "Workflow Automation",
        desc: "n8n, Make, custom Node — back-office processes on autopilot.",
        tag: "n8n · Make · Zapier · Node",
      },
      {
        key: "voice",
        title: "Voice Agents",
        desc: "Inbound and outbound voice flows. Multilingual, with human escalation.",
        tag: "Vapi · Retell · Twilio",
      },
      {
        key: "saas",
        title: "Custom SaaS & Web Apps",
        desc: "From spec to deploy. Next.js, TypeScript, Supabase, Stripe.",
        tag: "Next.js · Supabase · Stripe",
      },
    ],
  },
  work: {
    heading: "Work",
    subheading: "A few things I've built.",
    items: [
      {
        key: "sophia",
        title: "Sophia",
        desc: "Bilingual AI assistant. Context, memory, and tool use.",
        tag: "AI · EN/ES",
      },
      {
        key: "n8n-suite",
        title: "Ops Automation Suite",
        desc: "n8n workflows replacing manual ops for SMBs.",
        tag: "Automation",
      },
      {
        key: "voice-agent",
        title: "Voice Receptionist",
        desc: "24/7 bilingual voice agent for service businesses.",
        tag: "Voice · EN/ES",
      },
      {
        key: "saas-client",
        title: "Client SaaS",
        desc: "Custom dashboard, billing, multi-tenant auth.",
        tag: "SaaS",
      },
      {
        key: "portfolio",
        title: "This portfolio",
        desc: "Next.js, matter-js, framer-motion. The site you're on.",
        tag: "Open source",
      },
    ],
  },
  contact: {
    heading: "Contact",
    prompt: "Type a command — or click one below.",
    welcome: [
      "omar@toronto ~ $ whoami",
      "Omar Serrano — bilingual developer, Toronto GTA.",
      "omar@toronto ~ $ ls contact/",
      "email   linkedin   github   help",
    ],
    commands: {
      email: "email",
      linkedin: "linkedin",
      github: "github",
      help: "help",
      clear: "clear",
    },
    helpText: [
      "Available commands:",
      "  email      → open mail client",
      "  linkedin   → open profile in new tab",
      "  github     → open profile in new tab",
      "  clear      → clear terminal",
      "  help       → show this message",
    ],
    unknown: "command not found: $cmd. Type 'help' for available commands.",
  },
  chat: {
    placeholder: "Ask Sophia anything…",
    open: "Ask Sophia",
    title: "sophia — ai assistant",
    welcome:
      "Hi, I'm Sophia. I can answer questions about Omar's work, services, and availability. (Backend connecting soon.)",
    stub: "I'm a placeholder for now. Once Sophia's backend is wired up, I'll answer for real.",
  },
  footer: {
    builtWith: "Built with Next.js, Tailwind, framer-motion & matter-js.",
    rights: "© 2026 Omar Serrano. All rights reserved.",
  },
} as const;

export default en;
