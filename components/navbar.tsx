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
          <Link href="/jornada">Jornada</Link>
          <Link href="/painel">Painel</Link>
          <Link href="/mestres-ia">Mestres IA</Link>
          <Link href="/pratica">Prática</Link>
          <Link href="/entrevistas">Entrevistas</Link>
          <Link href="/carreira">Carreira</Link>
          <button onClick={toggle} className="text-eletric text-sm">🧘 Modo Imersão</button>
        </div>
      </div>
    </nav>
  );
}
