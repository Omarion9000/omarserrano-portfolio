"use client";

import Image from "next/image";
import { useState } from "react";
import { LINKS } from "@/lib/links";

const EMBED =
  "https://public.tableau.com/views/DidCanadareallydiversifyitsexportsawayfromtheUS/Dashboard1?:embed=y&:showVizHome=no&:display_count=no&:toolbar=bottom&:tabs=no";

export default function TableauEmbed({ alt, cta, note }: { alt: string; cta: string; note: string }) {
  const [live, setLive] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_60px_-40px_rgba(11,26,44,0.45)]">
      {live ? (
        <iframe
          src={EMBED}
          title={alt}
          className="block h-[1150px] w-full"
          loading="lazy"
          allowFullScreen
        />
      ) : (
        <div className="relative">
          <Image
            src="/project/dashboard.webp"
            alt={alt}
            width={1800}
            height={1650}
            className="h-auto w-full p-3 sm:p-5"
            sizes="(max-width: 1152px) 100vw, 1100px"
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-gradient-to-t from-white via-white/90 to-transparent px-4 pb-6 pt-24">
            <button
              type="button"
              onClick={() => setLive(true)}
              className="hidden rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700 md:inline-flex"
            >
              {cta}
            </button>
            <a
              href={LINKS.dashboard}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white md:hidden"
            >
              {cta}
            </a>
            <p className="hidden text-xs text-faint md:block">{note}</p>
          </div>
        </div>
      )}
    </div>
  );
}
