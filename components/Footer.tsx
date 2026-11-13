import type { Dictionary } from "@/lib/i18n";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="no-print border-t border-white/10 bg-navy-950 text-white/45">
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-7 text-xs tracking-wide sm:px-8">
        <span>{dict.footer.rights}</span>
        <span>Toronto, ON</span>
      </div>
    </footer>
  );
}
