import type { Dictionary } from "@/lib/i18n";
import PixelBunny from "@/components/PixelBunny";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="relative pt-12 pb-24 border-t border-editor-border overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-text-muted">
          <span className="text-syntax-comment">{"// "}</span>
          {dict.footer.builtWith}
        </div>
        <div className="font-mono text-xs text-text-muted">
          {dict.footer.rights}
        </div>
      </div>
      <PixelBunny />
    </footer>
  );
}
