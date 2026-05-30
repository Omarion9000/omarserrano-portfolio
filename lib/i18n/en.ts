const en = {
  meta: {
    title: "Omar Serrano — AI & Automation Developer · Toronto",
    description:
      "Bilingual EN/ES full-stack developer based in Toronto. I help businesses save 10+ hours per week with chatbots, voice agents, and smart workflow automations.",
  },
  nav: {
    about: "About",
    work: "Work",
    stack: "Stack",
    services: "Services",
    resume: "Resume",
    contact: "Contact",
  },
  hero: {
    name: "Omar Serrano",
    role: "AI & Automation Developer",
    location: "Toronto, GTA",
    languages: "EN · ES · FR",
    tagline: "Designing systems. Shipping experiences.",
    whoami: "Bilingual developer · Toronto",
    interests: "AI · automation · SaaS · voice agents",
    playlistTitle: "Building in public",
    playlistMeta: "AI experiments, n8n flows, voice agents",
    ticketTitle: "CODE × CRAFT",
    ticketEst: "EST. 2019 → PRESENT",
    ticketLocation: "Toronto · Remote · Worldwide",
    intro:
      "I help Toronto businesses save 10+ hours per week with bilingual chatbots, voice agents, and smart workflow automations. Bilingual EN/ES — based in the GTA.",
    sparkText: "I build with AI,",
    sparkSuffix: "prototyping ideas at the edge of what's possible.",
    middleText: "I turn rough ideas",
    middleHighlight: "into shipped products",
    middleSuffix: "with teams that move fast.",
    postit: "never give up!",
  },
  about: {
    heading: "About",
    postit:
      "I care about craft: clear interfaces, edge cases handled, and shipping things people actually use.",
    body: [
      "I'm a developer from Toronto working across three languages and three problem spaces: conversational AI, workflow automation, and custom SaaS.",
      "I like systems that quietly do their job — the chatbot that answers correctly at 2am, the automation that runs for six months without anyone touching it, the dashboard the team opens every Monday.",
    ],
    dashboard: {
      journeyLabel: "my journey",
      certifiedLabel: "certified",
      currentlyLabel: "currently building",
      nowBadge: "NOW",
      currentlyText:
        "Bilingual AI receptionists, Power Apps + Automate flows (30% efficiency gains), voice agents, and back-office automations that run for months untouched.",
      journey: [
        {
          title: "ESCI — International Trade",
          meta: "Mexico · 2018–2022",
          detail: "Model UN · cross-cultural foundation",
        },
        {
          title: "Meraki Creative Lab — Developer",
          meta: "Mexico · 2023–2025 · Remote",
        },
        {
          title: "Georgian College — Computer Programming",
          meta: "Toronto · 2023–2025",
        },
        {
          title: "AI & Automation Developer",
          meta: "Self-employed · 2025–present · Toronto",
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
    subheading: "What I work with daily.",
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
        title: "ai & automation",
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
    heading: "What I build",
    items: [
      {
        key: "chatbots",
        title: "AI Chatbots",
        desc: "Bilingual (EN/ES) conversational agents with real context, memory, and human handoff.",
        tag: "Claude · OpenAI · RAG",
      },
      {
        key: "automation",
        title: "Workflow Automation",
        desc: "n8n, Make, custom Node — back-office processes on autopilot.",
        tag: "n8n · Make · Node",
      },
      {
        key: "voice",
        title: "Voice Agents",
        desc: "Inbound and outbound voice flows. Multilingual, with human escalation.",
        tag: "Vapi · Twilio",
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
    subheading: "Things I've built and shipped.",
    items: [
      {
        key: "francaisia",
        title: "Francaisia",
        desc: "TEF Canada French exam prep platform. B2/CLB7-targeted with 92 lessons (A0–B2), AI-generated voice audio, and full i18n. Next.js 16 + Supabase + Claude API + Stripe billing.",
        tag: "SaaS · Production · 2026",
        href: "https://francaisia.com",
        image: "/work/francaisia.png",
      },
      {
        key: "prave",
        title: "PRAVÉ",
        desc: "Production SaaS — Express Entry CRS simulation platform with Stripe billing, Supabase auth, and AI-powered scenario analysis. Bilingual EN/ES.",
        tag: "SaaS · Production",
        href: "https://www.pravepath.ca",
        image: "/work/prave.webp",
      },
      {
        key: "sofia",
        title: "Sofia",
        desc: "Bilingual AI receptionist demo. Built with Anthropic Claude API, rate-limited serverless backend, full conversation context.",
        tag: "AI · Claude API",
        href: "#contact",
        image: "/work/sofia.webp",
      },
      {
        key: "jesse",
        title: "Jesse Merineau",
        desc: "Music artist website. Spotify embed integration, responsive multi-section layout. Client work delivered via Meraki Creative Lab.",
        tag: "Client work · Music",
        href: "https://jessemerineau.omarserrano.ca",
        image: "/work/jesse-merineau.webp",
      },
      {
        key: "pokemon",
        title: "Pokémon Battle Arena",
        desc: "Side project: Gen 1 turn-based battle simulator with TCG-style holographic UI. Next.js + XState + TypeScript.",
        tag: "Side project · Next.js · XState",
        href: "https://pokemon.omarserrano.ca",
        image: "/work/pokemon-arena.png",
      },
      {
        key: "qr",
        title: "QR Code Generator",
        desc: "Lightweight utility for generating QR codes for URLs and text, with local history tracking.",
        tag: "Utility · React",
        href: "https://qrgenerator-1-c9fn.onrender.com",
        image: "/work/qr-generator.webp",
      },
    ],
  },
  resume: {
    heading: "Resume",
    subheading: "The short version.",
    folderLabel: "RESUME.pdf",
    download: "Download PDF",
    viewOnline: "View online",
    badge: "AZ-900 certified",
    summary:
      "AI & Automation Developer based in Toronto. Bilingual EN/ES, FR basic. Available for remote work worldwide.",
    page: {
      role: "AI & Automation Developer · Full-Stack Engineer",
      location: "Toronto, ON",
      downloadCta: "↓ Download PDF",
      sections: {
        summary: "Summary",
        skills: "Skills",
        projects: "Featured Projects",
        experience: "Experience",
        education: "Education & Certifications",
      },
      summaryBody:
        "Bilingual EN/ES full-stack developer specialized in AI integration and workflow automation. Currently building Francaisia (TEF Canada French exam prep platform, soft-launch July 2026) and PRAVÉ (live production SaaS for Canadian Express Entry CRS simulation with Stripe subscription billing). Experienced with AI virtual assistants using Anthropic Claude API. Microsoft Azure Fundamentals certified. I help businesses save 10+ hours per week with chatbots, voice agents, and custom web applications. Toronto-based, available for remote work worldwide.",
      skills: [
        { label: "Frontend", value: "Next.js, React, TypeScript, Tailwind CSS, framer-motion, XState" },
        { label: "Backend", value: "Node.js, Express, REST APIs, PostgreSQL, Supabase" },
        { label: "AI & Automation", value: "Anthropic Claude API, OpenAI, n8n, Make, Vapi, Twilio" },
        { label: "Cloud & DevOps", value: "Microsoft Azure (AZ-900), Vercel, Render, Git, Linux" },
        { label: "Languages", value: "English (Fluent) · Spanish (Native) · French (Basic)" },
      ],
      projects: [
        {
          title: "Francaisia — TEF Canada French Exam Prep",
          href: "https://francaisia.com",
          linkLabel: "francaisia.com",
          desc:
            "B2/CLB7-targeted French learning platform with 92 lessons (A0–B2), AI-generated voice audio, Quebec narrative arc, Stripe billing, and full i18n. Next.js 16 + Supabase + Claude API.",
        },
        {
          title: "PRAVÉ — Express Entry CRS Simulation",
          href: "https://www.pravepath.ca",
          linkLabel: "pravepath.ca",
          desc:
            "Solo-built production SaaS with Stripe billing, Supabase auth + RLS, bilingual EN/ES interface, and Claude API-powered scenario analysis.",
        },
        {
          title: "Sofia — Bilingual AI Receptionist",
          href: null,
          linkLabel: "demo",
          desc:
            "AI virtual receptionist with Anthropic Claude API, conversation context, rate limiting, and bilingual EN/ES auto-detection.",
        },
        {
          title: "Pokémon Battle Arena",
          href: "https://pokemon.omarserrano.ca",
          linkLabel: "pokemon.omarserrano.ca",
          desc:
            "Gen 1 turn-based battle simulator with TCG holographic UI. Next.js 14 + XState v5 + TypeScript. 77 tests, 151 Pokémon prerendered as Server Components.",
        },
        {
          title: "Jesse Merineau — Music Website",
          href: "https://jessemerineau.omarserrano.ca",
          linkLabel: "jessemerineau.omarserrano.ca",
          desc:
            "Multi-page artist site with React Router, Spotify embed, and YouTube featured video. Vite + React + Tailwind.",
        },
      ],
      experience: [
        {
          title: "Founder · PRAVÉ & Francaisia (Self-employed)",
          dates: "May 2025 – Present",
          location: "Toronto, ON, Canada",
          bullets: [
            "Founded and built two production-grade SaaS platforms end-to-end: PRAVÉ (Canadian immigration CRS optimization, live with Stripe billing) and Francaisia (TEF Canada French exam prep, pre-launch)",
            "Architected full product stack: Next.js 16 App Router, Supabase (auth + Postgres + RLS), Stripe live integration, Anthropic Claude API for AI features, deployed on Vercel",
            "Designed and shipped trilingual UX (EN/ES/FR) with i18n middleware, custom CRS calculation engine, and AI-powered scenario analysis",
            "Owned full business operations: product strategy, legal/compliance (PIPEDA, CICC), payment infrastructure, content production, and pre-launch marketing",
          ],
        },
        {
          title: "Web Developer · Meraki Creative Lab",
          dates: "Mar 2023 – Apr 2025",
          location: "Remote · Mexico City, Mexico",
          bullets: [
            "Led development on client web projects using Next.js, React, TypeScript, and Node.js, delivering multiple production websites end-to-end",
            "Designed and implemented REST APIs and database schemas with Node.js, Express, and PostgreSQL",
            "Collaborated in Agile environment with Git workflow and continuous deployment via Vercel",
            "Coordinated scope, timelines, and revisions directly with clients in both English and Spanish",
          ],
        },
        {
          title: "Customer Service Associate · The Rec Room",
          dates: "Aug 2023 – May 2026",
          location: "Toronto, ON, Canada · part-time",
          bullets: [
            "Provided bilingual EN/ES customer service in a high-volume entertainment venue",
            "Maintained alongside full-time studies and developer roles; demonstrated reliability and time management",
          ],
        },
      ],
      education: [
        { name: "Diploma in Computer Programming", body: "Georgian College · Sept 2023 – Apr 2025 · Toronto, ON, Canada" },
        { name: "Bachelor in International Trade", body: "ESCI University · 2018 – 2022 · Mexico" },
        { name: "AZ-900 Azure Fundamentals", body: "Microsoft" },
        { name: null, body: "Frontend Developer Diploma · freeCodeCamp certifications (JS Algorithms and Data Structures, Responsive Web Design)" },
      ],
    },
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
    placeholder: "Type a message…",
    open: "Ask Sofia",
    title: "sofia — ai receptionist",
    subtitle: "Smile Dental Toronto · demo",
    welcome:
      "Hi! I'm Sofia, virtual receptionist at Smile Dental Toronto. How can I help you today?",
    banner: "Live demo — Built by Omar with Claude API",
    poweredBy: "Powered by Claude · Demo built by Omar Serrano",
    tryAsking: "Try asking:",
    suggestions: [
      "How much is a cleaning?",
      "I want to book an appointment",
      "What are your hours?",
      "I have a toothache",
    ],
    rateLimit: "You've reached the message limit. Try again in $min minutes.",
    error: "Connection error. Please try again.",
    fallbackReply: "Sorry, I couldn't respond.",
  },
  footer: {
    builtWith: "Built with Next.js, Tailwind, framer-motion & matter-js.",
    rights: "© 2026 Omar Serrano. All rights reserved.",
  },
} as const;

export default en;
