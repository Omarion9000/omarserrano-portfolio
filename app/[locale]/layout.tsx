import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const LOCALES = ["en", "es", "fr"] as const;

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Omar Serrano — Developer · AI · Automation · SaaS",
  description: "Bilingual developer in Toronto building AI chatbots, automation flows, and custom SaaS.",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!(LOCALES as readonly string[]).includes(params.locale)) {
    notFound();
  }

  return (
    <html lang={params.locale} className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-text-primary font-sans antialiased">
        <div className="relative min-h-screen paper-grid">{children}</div>
      </body>
    </html>
  );
}
