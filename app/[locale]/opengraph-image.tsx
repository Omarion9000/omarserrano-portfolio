import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { LOCALES } from "@/lib/i18n";

export const runtime = "nodejs";
export const alt = "Omar Serrano · Data Analyst · Toronto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const BARS = [
  { h: 76.2, c: "#4F6D8F", label: "76.2%" },
  { h: 67.8, c: "#C9A96E", label: "67.8%" },
];

export default async function OpengraphImage() {
  const [regular, bold] = await Promise.all([
    readFile(path.join(process.cwd(), "public/fonts/Inter-Regular.ttf")),
    readFile(path.join(process.cwd(), "public/fonts/Inter-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0B1A2C",
          color: "#FFFFFF",
          fontFamily: "Inter",
          padding: 80,
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 24, color: "#C9A96E", letterSpacing: 3 }}>
            TORONTO, ON
          </div>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.04em", marginTop: 20, lineHeight: 1 }}>
            Omar Serrano
          </div>
          <div style={{ fontSize: 48, marginTop: 28, fontWeight: 400 }}>Data Analyst</div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.6)", marginTop: 16 }}>
            SQL · Python · Tableau · Excel
          </div>
        </div>
        <div style={{ width: 300, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 36 }}>
          {BARS.map((b) => (
            <div key={b.label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{b.label}</div>
              <div style={{ width: 90, height: b.h * 5.2, background: b.c, borderRadius: 4 }} />
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
