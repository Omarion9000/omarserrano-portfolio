import type { Dict } from "./types";

const es: Dict = {
  meta: {
    title: "Omar Serrano · Data Analyst · Toronto",
    description:
      "Data Analyst en Toronto con SQL, Python, Tableau y Excel. Proyecto principal: ¿Canadá realmente diversificó sus exportaciones fuera de EE. UU. tras los aranceles de 2025?",
  },
  nav: {
    project: "Proyecto",
    skills: "Habilidades",
    apps: "Apps",
    experience: "Experiencia",
    education: "Educación",
    contact: "Contacto",
    resume: "CV",
  },
  hero: {
    location: "Toronto, ON",
    title: "Data Analyst",
    tools: "SQL · Python · Tableau · Excel",
    intro:
      "Limpio datos, los comparo con fuentes confiables y los convierto en gráficas y resúmenes claros. Diploma en Computer Programming de Georgian College y Google Data Analytics Professional Certificate. Bilingüe inglés y español.",
    ctaProject: "Ver mi proyecto",
    ctaResume: "Descargar CV",
    chartCaption: "Participación de EE. UU. en las exportaciones de bienes de Canadá, base vs últimos 12 meses. Fuente: Statistics Canada",
    chartLabels: {
      baseline: "2022–24",
      gold: "Oro",
      energy: "Energía",
      other: "Resto",
      latest: "Actual",
    },
  },
  project: {
    label: "Proyecto principal",
    title: "Canada Export Diversification Under US Tariffs",
    questionLabel: "La pregunta",
    question:
      "Desde los aranceles de EE. UU. de 2025, ¿Canadá realmente movió sus exportaciones de bienes fuera de EE. UU., o el cambio se explica sobre todo por oro y energía?",
    answerLabel: "Lo que encontré",
    answer:
      "En parte. La participación de EE. UU. en las exportaciones de Canadá bajó 8.4 puntos, de 76.2% a 67.8%, pero el oro explica más de la mitad de esa caída, y la mayor parte del aumento del oro es efecto precio. Sin oro ni energía, la participación bajó solo 3.3 puntos. De los sectores con aranceles, solo el aluminio encontró otros compradores de forma clara.",
    stats: [
      { value: "−8.4 pp", label: "caída de la participación de EE. UU." },
      { value: "56%", label: "de la caída la explica el oro" },
      { value: "0.84", label: "offset ratio del aluminio, el único sector que redirigió" },
      { value: "5,382", label: "productos y 224 destinos, ene 2022 a sep 2026" },
    ],
    dashboardAlt:
      "Dashboard de Tableau: ¿Canadá realmente diversificó sus exportaciones fuera de EE. UU. tras los aranceles de 2025?",
    dashboardCaption: "Dashboard interactivo en Tableau Public",
    didLabel: "Lo que hice",
    did: [
      "Descargué datos mensuales de comercio de Statistics Canada y armé tablas limpias con SQL (DuckDB) y Python.",
      "Comparé cada total con las tablas publicadas por Statistics Canada antes de hacer cualquier análisis.",
      "Definí cuatro hipótesis y sus reglas de aprobación antes de ver resultados, y luego probé cada una.",
      "Armé el dashboard en Tableau Public y escribí los hallazgos en lenguaje sencillo, con límites y fuentes.",
    ],
    toolsLabel: "Herramientas",
    tools: ["SQL (DuckDB)", "Python (pandas)", "Jupyter", "Tableau Public", "Excel", "Git"],
    openDashboard: "Abrir dashboard",
    openRepo: "Código y reporte en GitHub",
  },
  skills: {
    heading: "Habilidades",
    groups: [
      {
        title: "Datos",
        items: ["SQL", "Python (pandas, Jupyter)", "Tableau", "Excel y Google Sheets"],
      },
      {
        title: "Análisis",
        items: [
          "Limpieza de datos",
          "Validación contra fuentes confiables",
          "Visualización de datos",
          "Reportes claros para gente no técnica",
        ],
      },
      {
        title: "Otros",
        items: ["Git y GitHub", "Azure fundamentals (AZ-900)", "HTML, CSS, JavaScript, React", "Inglés y español"],
      },
    ],
  },
  apps: {
    heading: "Apps que construí y mantengo",
    sub: "Dos aplicaciones web que diseñé, construí y sigo manteniendo por mi cuenta.",
    visit: "Visitar",
    items: [
      {
        name: "PRAVÉ",
        url: "https://www.pravepath.ca",
        urlLabel: "pravepath.ca",
        image: "/apps/prave.webp",
        desc: "Ayuda a quienes aplican a la residencia permanente de Canadá a entender su puntaje de Express Entry (CRS) y probar escenarios. Bilingüe inglés y español.",
        stack: "Next.js · TypeScript · PostgreSQL",
      },
      {
        name: "Francaisia",
        url: "https://francaisia.com",
        urlLabel: "francaisia.com",
        image: "/apps/francaisia.webp",
        desc: "Plataforma para aprender francés y prepararse para el examen TEF Canada, con lecciones desde principiante (A0) hasta B2.",
        stack: "Next.js · TypeScript · PostgreSQL",
      },
    ],
  },
  experience: {
    heading: "Experiencia",
    items: [
      {
        title: "Independent Web Applications: Setup and User Support",
        org: "Independiente",
        type: "",
        dates: "may 2025 – actual",
        location: "Toronto, ON",
        bullets: [
          "Construí y opero dos aplicaciones web en vivo, pravepath.ca y francaisia.com: definí lo que necesitaban los usuarios, configuré el sistema, lo probé de punta a punta y lo lancé.",
          "Escribo el contenido de ayuda para usuarios, como la explicación de cada campo y de cómo se calculan los resultados, para que puedan avanzar solos.",
          "Reproduzco los problemas que reportan los usuarios, encuentro la causa y confirmo la solución con ellos.",
        ],
      },
      {
        title: "Customer Service Associate / Server",
        org: "The Rec Room",
        type: "Medio tiempo",
        dates: "ago 2023 – jun 2026",
        location: "Toronto, ON",
        bullets: [
          "Recomendé y vendí productos adicionales en cada mesa, como tarjetas de juego para familias, para subir el ticket promedio.",
          "Apoyé eventos privados de hasta 800 invitados en un entorno rápido y de alto volumen.",
          "Resolví en el momento fallas de terminales POS, dispositivos de pago e impresoras de tickets, y escalé lo que no podía resolver.",
        ],
      },
      {
        title: "Freelance Web Development and Client Support",
        org: "Meraki Creative Lab",
        type: "Freelance",
        dates: "mar 2023 – abr 2025",
        location: "Remoto",
        bullets: [
          "Fui el contacto de 3 a 5 clientes con sitios web de pequeños negocios: convertí sus solicitudes en tareas claras y di avances en inglés y español.",
          "Construí y mantuve sitios web responsivos con HTML, CSS, JavaScript y React, usando Git.",
        ],
      },
      {
        title: "Administrative Support Specialist",
        org: "Hospital General de Atizapán",
        type: "Tiempo completo",
        dates: "jun 2020 – jun 2022",
        location: "Atizapán, Estado de México",
        bullets: [
          "Apoyé al personal de varios departamentos del hospital y a la Dirección con solicitudes, correspondencia y seguimiento.",
          "Propuse archivos compartidos en Google Drive para que los equipos vieran en un solo lugar la disponibilidad de insumos y medicamentos, con la información precisa y al día.",
          "Me ascendieron a un puesto de nivel jefe de departamento a unos cinco meses de haber entrado.",
        ],
      },
    ],
  },
  education: {
    heading: "Educación y certificaciones",
    educationLabel: "Educación",
    certsLabel: "Certificaciones",
    items: [
      { name: "Diploma, Computer Programming", org: "Georgian College", dates: "sep 2023 – abr 2025" },
      {
        name: "Licenciatura en Comercio Internacional",
        org: "ESCI University, Ciudad de México",
        dates: "ago 2018 – jun 2022",
        note: "Cadena de suministro, compras y comercio internacional.",
      },
    ],
    certs: [
      { name: "Google Data Analytics Professional Certificate", org: "Google · Coursera", dates: "oct 2026" },
      { name: "Microsoft Azure Fundamentals (AZ-900)", org: "Microsoft", dates: "2025" },
    ],
  },
  contact: {
    heading: "Contacto",
    body: "Busco puestos de Data Analyst, Business Analyst y Operations Analyst en Toronto. La forma más rápida de contactarme es por email.",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    tableau: "Tableau Public",
  },
  footer: { rights: "© 2026 Omar Serrano" },
  resume: {
    pageTitle: "CV",
    targetTitle: "Data Analyst",
    download: "Descargar PDF (inglés)",
    back: "Volver al inicio",
    summaryLabel: "Perfil",
    summary:
      "Data analyst en Toronto con diploma en Computer Programming de Georgian College y el Google Data Analytics Professional Certificate. Uso SQL, Python y Tableau para limpiar datos, compararlos con fuentes confiables y convertirlos en gráficas y resúmenes claros. Experiencia en administración hospitalaria y atención a clientes. Bilingüe inglés y español.",
    skillsLabel: "Habilidades",
    skills: [
      { label: "Datos", value: "SQL (DuckDB), Python (pandas, Jupyter), Tableau, Excel y Google Sheets" },
      { label: "Análisis", value: "Limpieza y validación de datos, visualización, reportes en lenguaje sencillo" },
      { label: "Otros", value: "Git y GitHub, Azure fundamentals, HTML, CSS, JavaScript, React" },
    ],
    projectsLabel: "Proyecto",
    projectTitle: "Canada Export Diversification Under US Tariffs",
    projectDates: "nov 2026",
    projectBullets: [
      "Analicé datos mensuales de comercio de Statistics Canada (5,382 productos, 224 destinos) para probar si las exportaciones de Canadá se alejaron de EE. UU. tras los aranceles de 2025.",
      "Comparé cada total con las tablas publicadas y encontré que el oro explica el 56% de la caída de la participación de EE. UU., sobre todo por precios más altos.",
      "Hecho en SQL (DuckDB) y Python, con un dashboard en Tableau Public y un reporte en lenguaje sencillo.",
    ],
    experienceLabel: "Experiencia",
    educationLabel: "Educación y certificaciones",
    languagesLabel: "Idiomas",
    languages: "Inglés (fluido), español (nativo)",
  },
};

export default es;
