import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DocaMestres } from "@/components/doca-mestres";
import { PaletteCommand } from "@/components/ui/palette-command";
import { ImersaoProvider } from "@/components/modulo-imersao";
import { Navbar } from "@/components/navbar";
import { XPProvider } from "@/contexts/XPContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXUS – Universidade Soberana Front-End",
  description: "Torne-se Mestre em Front-End",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ImersaoProvider>
          <XPProvider>
            <Navbar />
            <main className="pb-20">{children}</main>
            <DocaMestres />
            <PaletteCommand />
          </XPProvider>
        </ImersaoProvider>
      </body>
    </html>
  );
}
