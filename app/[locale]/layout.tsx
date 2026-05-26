import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Caveat } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, LOCALES } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

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
    <html lang={params.locale} className={`${inter.variable} ${jetbrains.variable} ${caveat.variable}`}>
      <body className="bg-background text-text-primary font-sans antialiased">
        <div className="relative min-h-screen paper-grid paper-noise">{children}</div>
      </body>
    </html>
  );
}
