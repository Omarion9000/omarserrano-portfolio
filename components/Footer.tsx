import type { Dictionary } from "@/lib/i18n";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-8 font-mono text-xs text-faint sm:px-8">
        <span>{dict.footer.rights}</span>
        <span>Toronto, ON</span>
      </div>
    </footer>
  );
}
