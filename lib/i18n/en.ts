import type { Dict } from "./types";

const en: Dict = {
  meta: {
    title: "Omar Serrano · Data Analyst · Toronto",
    description:
      "Data Analyst in Toronto working with SQL, Python, Tableau and Excel. Featured project: did Canada really diversify its exports away from the US after the 2025 tariffs?",
  },
  nav: {
    project: "Project",
    skills: "Skills",
    apps: "Apps",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    location: "Toronto, ON",
    title: "Data Analyst",
    tools: "SQL · Python · Tableau · Excel",
    intro:
      "I clean data, check it against trusted sources and turn it into clear charts and summaries. Computer Programming diploma from Georgian College and the Google Data Analytics Professional Certificate. Bilingual English and Spanish.",
    ctaProject: "See my project",
    ctaResume: "Download resume",
    chartTitle: "US share of Canada's goods exports",
    chartCaption: "12-month sums, Dec 2022 to Sep 2026. Source: Statistics Canada.",
    seriesAll: "All goods",
    seriesCore: "Without gold and energy",
    tariffMarker: "First US tariffs",
  },
  project: {
    label: "Featured project",
    title: "Canada Export Diversification Under US Tariffs",
    questionLabel: "The question",
    question:
      "Since the 2025 US tariffs, did Canada really move its goods exports away from the US, or is the change mostly gold and energy?",
    answerLabel: "What I found",
    answer:
      "Partly. The US share of Canada's exports fell 8.4 points, from 76.2% to 67.8%, but gold explains more than half of that drop, and most of the rise in gold is a price effect. Without gold and energy, the share fell only 3.3 points. Among the tariffed sectors, only aluminum clearly found other buyers.",
    stats: [
      { value: "−8.4 pp", label: "drop in the US share of exports" },
      { value: "56%", label: "of the drop explained by gold" },
      { value: "0.84", label: "aluminum offset ratio, the only sector that redirected" },
      { value: "5,382", label: "products and 224 destinations, Jan 2022 to Sep 2026" },
    ],
    dashboardAlt:
      "Tableau dashboard: did Canada really diversify its exports away from the US after the 2025 tariffs?",
    dashboardCaption: "Interactive dashboard on Tableau Public",
    didLabel: "What I did",
    did: [
      "Downloaded monthly Statistics Canada trade data and built clean tables with SQL (DuckDB) and Python.",
      "Checked every total against published Statistics Canada tables before running any analysis.",
      "Wrote down four hypotheses and their pass/fail rules before looking at the results, then tested each one.",
      "Built the dashboard in Tableau Public and wrote the findings in plain language, with limits and sources.",
    ],
    toolsLabel: "Tools",
    tools: ["SQL (DuckDB)", "Python (pandas)", "Jupyter", "Tableau Public", "Excel", "Git"],
    openDashboard: "Open dashboard",
    openRepo: "Code and write-up on GitHub",
    readStory: "Read the full story",
    loadDashboard: "Load the interactive dashboard",
    loadNote: "Opens the live Tableau Public view here.",
  },
  story: {
    metaTitle: "Did Canada really diversify its exports away from the US? · Omar Serrano",
    label: "Project · Statistics Canada trade data",
    title: "Did Canada really diversify its exports away from the US?",
    dek: "The US share of Canada's goods exports dropped after the 2025 tariffs. I tested how much of that drop is real diversification and how much is gold and energy.",
    back: "Back to home",
    steps: [
      {
        kicker: "The headline",
        title: "The US share fell 8.4 points",
        body: [
          "Measured with 12-month sums, the US share of Canada's goods exports went from 76.2% in the 2022–2024 baseline to 67.8% in the latest 12 months (Oct 2025 to Sep 2026).",
          "The gold line removes gold and energy. It fell too, but much less.",
        ],
      },
      {
        kicker: "Hypothesis 1",
        title: "Most of the change came from other markets growing",
        verdict: "Confirmed",
        body: [
          "Exports to the US fell 3.6%, from CAD 549.2 billion a year to 529.5 billion. Exports to all other countries rose 46.9%, from CAD 171.5 billion to 251.9 billion.",
          "About 91% of the change in the share is on the rest-of-world side, not the US side.",
        ],
      },
      {
        kicker: "Hypothesis 2",
        title: "Gold explains more than half of the drop",
        verdict: "Confirmed",
        body: [
          "Gold accounts for 4.7 of the 8.4 points (56%). Most of it is price: gold exports to other countries rose CAD 45.6 billion, and 77% of that is a price effect (value per gram +139%, grams shipped +28%).",
          "Without gold and energy, the US share fell only 3.3 points.",
        ],
      },
      {
        kicker: "Hypothesis 3",
        title: "Only aluminum clearly found other buyers",
        verdict: "Confirmed for 3 of 5 sectors",
        body: [
          "The offset ratio divides what a sector gained in other markets by what it lost in the US. Aluminum gained 84 cents elsewhere for every dollar lost in the US.",
          "Steel, autos and softwood lumber did not redirect. Copper partly did, from a small base.",
        ],
      },
      {
        kicker: "Hypothesis 4",
        title: "New export pairs rose, but stayed inside the band",
        verdict: "Confirmed, at the edge",
        body: [
          "A new pair is a product and a non-US country whose exports grew past CAD 1 million a year. In September 2026 there were 605, 19.7% above the baseline mean of 505.5.",
          "That is inside the ±20% band set before the analysis, but only 1.6 pairs below the limit, so a moderate rise cannot be ruled out.",
        ],
      },
      {
        kicker: "Sector exposure",
        title: "Autos and steel still depend most on the US",
        body: [
          "Autos and parts (92%) and steel (89%) still send most of their exports to the US.",
          "Copper changed the most, from 97% to 40%, but it is a small sector (CAD 1.4 billion a year).",
        ],
      },
    ],
    charts: {
      line: { title: "US share of exports, 12-month sums (%)" },
      sides: {
        title: "Exports per year, CAD billions",
        us: "To the US",
        row: "To other countries",
        base: "Baseline 2022–2024",
        latest: "Latest 12 months",
        unit: "bn",
      },
      waterfall: {
        title: "Change in the US share, percentage points",
        labels: ["Baseline", "Gold", "Energy", "Everything else", "Latest"],
      },
      offset: { title: "Offset ratio by tariffed sector", redirected: "Redirected", notRedirected: "Not redirected" },
      pairs: { title: "New product–country pairs outside the US", band: "Baseline mean ±20%", mean: "Baseline mean" },
      exposure: { title: "Share of each sector's exports going to the US (%)", base: "2022–2024", latest: "Latest 12 months" },
    },
    sectors: {
      aluminum: "Aluminum",
      copper: "Copper",
      autos: "Autos and parts",
      steel: "Steel",
      lumber: "Softwood lumber",
      energy: "Energy",
      other: "All other goods",
      gold: "Gold",
    },
    limitsTitle: "Limits",
    limits: [
      "Description, not cause. The results show what changed alongside the tariffs; they do not prove the tariffs caused it.",
      "Gold is volatile. It depends on world prices and on where bullion is refined and stored.",
      "Exports surged before the tariffs. November 2024 to February 2025 are left out of both periods.",
    ],
    methodTitle: "How I checked it",
    method: "Monthly Statistics Canada data, January 2022 to September 2026, 5,382 products and 224 destinations. Every total was compared with published Statistics Canada tables before any result, and all thresholds were written down before looking at the data.",
    source: "Source: Statistics Canada, Canadian International Merchandise Trade (domestic exports, customs basis).",
  },
  skills: {
    heading: "Skills",
    groups: [
      {
        title: "Data",
        items: ["SQL", "Python (pandas, Jupyter)", "Tableau", "Excel and Google Sheets"],
      },
      {
        title: "Analysis",
        items: [
          "Data cleaning",
          "Checking data against trusted sources",
          "Data visualization",
          "Writing up results for non-technical readers",
        ],
      },
      {
        title: "Other",
        items: ["Git and GitHub", "Azure fundamentals (AZ-900)", "HTML, CSS, JavaScript, React", "English and Spanish"],
      },
    ],
  },
  apps: {
    heading: "Apps I built and run",
    sub: "Two web apps I designed, built and still maintain on my own.",
    visit: "Visit",
    items: [
      {
        name: "PRAVÉ",
        url: "https://www.pravepath.ca",
        urlLabel: "pravepath.ca",
        image: "/apps/prave.webp",
        desc: "Helps people applying for Canadian permanent residence understand their Express Entry (CRS) score and test what-if scenarios. Bilingual English and Spanish.",
        stack: "Next.js · TypeScript · PostgreSQL",
      },
      {
        name: "Francaisia",
        url: "https://francaisia.com",
        urlLabel: "francaisia.com",
        image: "/apps/francaisia.webp",
        desc: "A French-learning platform for people preparing for the TEF Canada exam, with lessons from beginner (A0) to B2.",
        stack: "Next.js · TypeScript · PostgreSQL",
      },
    ],
  },
  experience: {
    heading: "Experience",
    items: [
      {
        title: "Independent Web Applications: Setup and User Support",
        org: "Self-employed",
        type: "",
        dates: "May 2025 – Present",
        location: "Toronto, ON",
        bullets: [
          "Built and run two live web applications, pravepath.ca and francaisia.com: worked out what users needed, set up the system, tested it end to end and launched it.",
          "Write the user-facing help content, such as explanations of each field and how results are calculated, so users can work on their own.",
          "Reproduce user-reported problems, find the cause and confirm the fix with the user.",
        ],
      },
      {
        title: "Customer Service Associate / Server",
        org: "The Rec Room",
        type: "Part-time",
        dates: "Aug 2023 – Jun 2026",
        location: "Toronto, ON",
        bullets: [
          "Recommended and upsold products at every table, such as game cards for families, to raise the average bill.",
          "Supported private events for up to 800 guests in a fast, high-volume setting.",
          "Fixed POS terminal, payment device and receipt printer problems on the spot and escalated what I could not fix.",
        ],
      },
      {
        title: "Freelance Web Development and Client Support",
        org: "Meraki Creative Lab",
        type: "Freelance",
        dates: "Mar 2023 – Apr 2025",
        location: "Remote",
        bullets: [
          "Acted as the client contact for 3 to 5 small business websites, turning their requests into clear tasks and giving status updates in English and Spanish.",
          "Built and maintained responsive websites with HTML, CSS, JavaScript and React, using Git.",
        ],
      },
      {
        title: "Administrative Support Specialist",
        org: "Hospital General de Atizapán",
        type: "Full-time",
        dates: "Jun 2020 – Jun 2022",
        location: "Atizapán, State of Mexico",
        bullets: [
          "Supported staff across hospital departments and the Director's Office with requests, correspondence and follow-ups.",
          "Proposed shared Google Drive files so teams could see supply and medication availability in one place, keeping the information accurate and up to date.",
          "Promoted to a department head level role within about five months of starting.",
        ],
      },
    ],
  },
  education: {
    heading: "Education and certifications",
    educationLabel: "Education",
    certsLabel: "Certifications",
    items: [
      { name: "Diploma, Computer Programming", org: "Georgian College", dates: "Sep 2023 – Apr 2025" },
      {
        name: "Bachelor's degree, International Trade",
        org: "ESCI University, Mexico City",
        dates: "Aug 2018 – Jun 2022",
        note: "Studied supply chain, procurement and international trade.",
      },
    ],
    certs: [
      { name: "Google Data Analytics Professional Certificate", org: "Google · Coursera", dates: "Oct 2026" },
      { name: "Microsoft Azure Fundamentals (AZ-900)", org: "Microsoft", dates: "2025" },
    ],
  },
  contact: {
    heading: "Contact",
    body: "Open to Data Analyst, Business Analyst and Operations Analyst roles in Toronto. The fastest way to reach me is email.",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    tableau: "Tableau Public",
  },
  footer: { rights: "© 2026 Omar Serrano" },
  resume: {
    pageTitle: "Resume",
    targetTitle: "Data Analyst",
    download: "Download PDF",
    back: "Back to home",
    summaryLabel: "Profile",
    summary:
      "Toronto-based data analyst with a Computer Programming diploma from Georgian College and the Google Data Analytics Professional Certificate. I use SQL, Python and Tableau to clean data, check it against trusted sources and turn it into clear charts and summaries. Background in hospital administration and client support. Bilingual English and Spanish.",
    skillsLabel: "Skills",
    skills: [
      { label: "Data", value: "SQL (DuckDB), Python (pandas, Jupyter), Tableau, Excel and Google Sheets" },
      { label: "Analysis", value: "Data cleaning, data validation, data visualization, plain-language reporting" },
      { label: "Other", value: "Git and GitHub, Azure fundamentals, HTML, CSS, JavaScript, React" },
    ],
    projectsLabel: "Project",
    projectTitle: "Canada Export Diversification Under US Tariffs",
    projectDates: "Nov 2026",
    projectBullets: [
      "Analyzed monthly Statistics Canada trade data (5,382 products, 224 destinations) to test whether Canada's exports moved away from the US after the 2025 tariffs.",
      "Checked every total against published tables, then found that gold explained 56% of the drop in the US share, mostly because of higher prices.",
      "Built in SQL (DuckDB) and Python, with a Tableau Public dashboard and a plain-language write-up.",
    ],
    experienceLabel: "Experience",
    educationLabel: "Education and certifications",
    languagesLabel: "Languages",
    languages: "English (fluent), Spanish (native)",
  },
};

export default en;
