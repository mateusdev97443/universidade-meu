"use client";
import Link from "next/link";
import { useImersao } from "./modulo-imersao";

export function Navbar() {
  const { toggle } = useImersao();
  return (
    <nav className="border-b border-border bg-obsidian/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-eletric">NEXUS</span> <span className="text-ice">Front-End</span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="/jornada" className="hover:text-eletric transition">Jornada</Link>
          <Link href="/painel" className="hover:text-eletric transition">Painel</Link>
          <Link href="/mestres-ia" className="hover:text-eletric transition">Mestres IA</Link>
          <Link href="/pratica" className="hover:text-eletric transition">Prática</Link>
          <Link href="/entrevistas" className="hover:text-eletric transition">Entrevistas</Link>
          <Link href="/carreira" className="hover:text-eletric transition">Carreira</Link>
          <button onClick={toggle} className="text-eletric text-sm border border-eletric/30 rounded-full px-3 py-1 hover:bg-eletric/10 transition">
            🧘 Modo Imersão
          </button>
        </div>
      </div>
    </nav>
  );
}
