"use client";
import Link from "next/link";
const mestres = [
  { nome: "🧙 Mestre Front-End", slug: "frontend" },
  { nome: "⚡ Mestre JavaScript", slug: "js" },
  { nome: "🏗️ Arquiteto React", slug: "react" },
];
export function DocaMestres() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-eletric/30 py-2 px-4 flex justify-center gap-6 z-40">
      {mestres.map((m) => (
        <Link key={m.slug} href={`/mestres/${m.slug}`} className="text-sm text-ice/80 hover:text-eletric">{m.nome}</Link>
      ))}
    </div>
  );
}
