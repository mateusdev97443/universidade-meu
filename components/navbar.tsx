"use client";
import { useState } from "react";
import Link from "next/link";
import { useImersao } from "./modulo-imersao";

export function Navbar() {
  const { toggle } = useImersao();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/jornada", label: "Jornada" },
    { href: "/painel", label: "Painel" },
    { href: "/faculdades", label: "Faculdades" },
    { href: "/mestres-ia", label: "Mestres IA" },
    { href: "/pratica", label: "Prática" },
    { href: "/entrevistas", label: "Entrevistas" },
    { href: "/carreira", label: "Carreira" },
  ];

  return (
    <>
      <nav className="border-b border-border bg-obsidian/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-eletric">NEXUS</span>{" "}
            <span className="text-ice">Front-End</span>
          </Link>
          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-eletric transition"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggle}
              className="text-eletric text-sm border border-eletric/30 rounded-full px-3 py-1 hover:bg-eletric/10 transition"
            >
              🧘 Modo Imersão
            </button>
          </div>
          {/* Mobile hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-eletric focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="flex flex-col items-center justify-center h-full gap-6 text-ice text-xl" onClick={(e) => e.stopPropagation()}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-eletric transition"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                toggle();
              }}
              className="text-eletric border border-eletric/30 rounded-full px-4 py-2 text-base"
            >
              🧘 Modo Imersão
            </button>
          </div>
        </div>
      )}
    </>
  );
}
