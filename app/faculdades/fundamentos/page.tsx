import Link from "next/link";
import { aulas } from "@/data/aulas";

export default function FundamentosPage() {
  const modulos = aulas.fundamentos;
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">📘 Faculdade de Fundamentos</h1>
      <p className="text-ice-muted mb-8">Domine a base do front-end: HTML, CSS e JavaScript essencial.</p>
      <div className="space-y-4">
        {modulos.map((modulo, idx) => (
          <Link key={modulo.slug} href={`/sala-de-aula/fundamentos/${modulo.slug}`}>
            <div className="bg-obsidian-card border border-border rounded-xl p-5 hover:border-eletric transition cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-eletric font-bold text-xl">{idx+1}</span>
                <div>
                  <h2 className="text-xl font-semibold">{modulo.titulo}</h2>
                  <p className="text-ice-muted text-sm">{modulo.descricao}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
