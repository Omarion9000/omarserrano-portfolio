import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const interBold = await readFile(
    path.join(process.cwd(), "public/fonts/Inter-Bold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A1814",
          color: "#FAF7F2",
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: "-0.04em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>O</span>
        <span style={{ color: "#C96A4A" }}>.</span>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interBold, style: "normal", weight: 700 },
      ],
    },
  );
}
