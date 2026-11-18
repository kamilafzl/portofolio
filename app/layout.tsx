import type { Metadata } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/caveat";
import "./globals.css";
import { profile } from "@/data/portfolio";

// Judul yang muncul di tab browser & saat link dibagikan
export const metadata: Metadata = {
  title: `${profile.name} | Data Analyst & Data Science Portfolio`,
  description: profile.intro,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
    <body className="font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
