type IconKey =
  | "next" | "react" | "ts" | "tailwind" | "motion"
  | "claude" | "openai" | "supabase" | "n8n" | "make"
  | "vercel" | "azure" | "node" | "postgres" | "git";

export default function SkillIcon({ icon, className = "" }: { icon: string; className?: string }) {
  const props = {
    className: `w-5 h-5 ${className}`.trim(),
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
  };

  switch (icon as IconKey) {
    case "next":
      return <svg {...props}><path d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" /></svg>;
    case "react":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
      );
    case "ts":
      return (
        <svg {...props}>
          <rect x="2" y="2" width="20" height="20" rx="3" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FAF7F2" fontFamily="monospace">TS</text>
        </svg>
      );
    case "tailwind":
      return <svg {...props}><path d="M12 6c-2.5 0-4 1-4.5 3 .5-.7 1.5-1 2.5-.5.8.4 1.2 1 1.7 1.5 1 1 2 2 4.3 2 2.5 0 4-1 4.5-3-.5.7-1.5 1-2.5.5-.8-.4-1.2-1-1.7-1.5-1-1-2-2-4.3-2zm-4 6c-2.5 0-4 1-4.5 3 .5-.7 1.5-1 2.5-.5.8.4 1.2 1 1.7 1.5 1 1 2 2 4.3 2 2.5 0 4-1 4.5-3-.5.7-1.5 1-2.5.5-.8-.4-1.2-1-1.7-1.5-1-1-2-2-4.3-2z" /></svg>;
    case "motion":
      return <svg {...props}><path d="M3 3l9 9-9 9V3zm10 0l9 9-9 9V3z" fillOpacity="0.6" /></svg>;
    case "claude":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 9c0-1 1-2 2-2s2 1 2 2c0 2-4 2-4 4 0 1 1 2 2 2h2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "openai":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 9l3 3 3-3M9 15l3-3 3 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "supabase":
      return <svg {...props}><path d="M12 2L4 14h7v8l8-12h-7V2z" /></svg>;
    case "n8n":
      return (
        <svg {...props}>
          <circle cx="5" cy="12" r="3" />
          <circle cx="19" cy="12" r="3" />
          <circle cx="12" cy="6" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <path d="M7.5 12h9M12 8.5v7" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "make":
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M9 6h6M6 9v6M18 9v6M9 18h6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "vercel":
      return <svg {...props}><path d="M12 2L22 20H2L12 2z" /></svg>;
    case "azure":
      return <svg {...props}><path d="M3 19l5-15h4l9 15h-7l-2-5-3 5H3zm6-2h3l-1.5-3-1.5 3z" /></svg>;
    case "node":
      return <svg {...props}><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 4.5l5 2.8v5.4l-5 2.8-5-2.8V9.3l5-2.8z" /></svg>;
    case "postgres":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "git":
      return (
        <svg {...props}>
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M8 12c0-3 3-6 6-6m-6 6c0 3 3 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return <svg {...props}><circle cx="12" cy="12" r="6" /></svg>;
  }
}
