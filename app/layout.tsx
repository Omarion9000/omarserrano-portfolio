import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omar Serrano",
  description: "Developer · AI · Automation · SaaS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
