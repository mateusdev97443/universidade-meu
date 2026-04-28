"use client";
import Link from "next/link";
import { useImersao } from "./modulo-imersao";
export function Navbar() {
  const { toggle } = useImersao();
  return (
    <nav className="border-b border-eletric/20 bg-obsidian/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold">M.E.U — <span className="text-eletric">Universidade Soberana</span></Link>
        <div className="flex gap-6">
          <Link href="/universidade">Universidade</Link>
          <Link href="/trilhas">Trilhas</Link>
          <Link href="/laboratorios">Laboratórios</Link>
          <Link href="/missoes">Missões</Link>
          <Link href="/mestres">Mestres</Link>
          <Link href="/arena-entrevistas">Arena</Link>
          <Link href="/biblioteca">Biblioteca</Link>
          <Link href="/carreira">Carreira</Link>
          <button onClick={toggle} className="text-eletric">🧘 Modo Imersão</button>
        </div>
      </div>
    </nav>
  );
}
