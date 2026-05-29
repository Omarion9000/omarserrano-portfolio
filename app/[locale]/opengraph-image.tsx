import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { LOCALES } from "@/lib/i18n";

export const runtime = "nodejs";
export const alt = "Omar Serrano — AI & Automation Developer · Toronto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const SUBTITLES: Record<string, string> = {
  en: "AI & Automation Developer",
  es: "Desarrollador de IA y Automatización",
  fr: "Développeur IA et Automatisation",
};

const TAGLINES: Record<string, string> = {
  en: "Bilingual full-stack · AI workflows · SaaS",
  es: "Full-stack bilingüe · flujos de IA · SaaS",
  fr: "Full-stack bilingue · flux d'IA · SaaS",
};

export default async function OpengraphImage({
  params,
}: {
  params: { locale: string };
}) {
  const [interRegular, interBold, jetbrains] = await Promise.all([
    readFile(path.join(process.cwd(), "public/fonts/Inter-Regular.ttf")),
    readFile(path.join(process.cwd(), "public/fonts/Inter-Bold.ttf")),
    readFile(path.join(process.cwd(), "public/fonts/JetBrainsMono-Regular.ttf")),
  ]);

  const subtitle = SUBTITLES[params.locale] ?? SUBTITLES.en;
  const tagline = TAGLINES[params.locale] ?? TAGLINES.en;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FAF7F2",
          fontFamily: "Inter",
          color: "#1A1814",
          padding: 72,
          position: "relative",
        }}
      >
        {/* Subtle paper grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(26,24,20,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,24,20,0.045) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Left column — text stack */}
        <div
          style={{
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: 26,
              color: "#A39B8E",
            }}
          >
            <span style={{ color: "#C96A4A", marginRight: 12 }}>{"//"}</span>
            <span>portfolio</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 112,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              Omar Serrano
            </div>
            <div
              style={{
                fontSize: 40,
                color: "#5C544A",
                marginTop: 24,
                letterSpacing: "-0.01em",
              }}
            >
              {subtitle}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontFamily: "JetBrains Mono",
                fontSize: 26,
                color: "#A39B8E",
              }}
            >
              <span>Toronto</span>
              <span style={{ margin: "0 14px" }}>·</span>
              <span>EN</span>
              <span style={{ margin: "0 14px" }}>·</span>
              <span>ES</span>
              <span style={{ margin: "0 14px" }}>·</span>
              <span>FR</span>
            </div>
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#5C544A",
              display: "flex",
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Right column — stacked polaroid monogram */}
        <div
          style={{
            width: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 280,
              height: 340,
              background: "#E6B86A",
              borderRadius: 6,
              transform: "rotate(-9deg) translate(-28px, 28px)",
              boxShadow: "0 8px 24px rgba(26,24,20,0.18)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 280,
              height: 340,
              background: "#C96A4A",
              borderRadius: 6,
              transform: "rotate(5deg) translate(8px, 0px)",
              boxShadow: "0 8px 24px rgba(26,24,20,0.18)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 280,
              height: 340,
              background: "#FFFFFF",
              borderRadius: 6,
              transform: "rotate(-2deg) translate(28px, -20px)",
              boxShadow: "0 16px 36px rgba(26,24,20,0.24)",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "JetBrains Mono",
                fontSize: 18,
                color: "#A39B8E",
              }}
            >
              <span style={{ color: "#C96A4A", marginRight: 8 }}>{"//"}</span>
              <span>dev</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                fontSize: 168,
                fontWeight: 700,
                lineHeight: 1,
                color: "#1A1814",
                letterSpacing: "-0.06em",
              }}
            >
              <span>O</span>
              <span style={{ color: "#C96A4A" }}>.</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "JetBrains Mono",
                fontSize: 16,
                color: "#5C544A",
              }}
            >
              <span>2026</span>
              <span>Toronto</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
        { name: "Inter", data: interBold, style: "normal", weight: 700 },
        {
          name: "JetBrains Mono",
          data: jetbrains,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
