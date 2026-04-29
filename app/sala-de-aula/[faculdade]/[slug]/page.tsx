import { notFound } from "next/navigation";
import Link from "next/link";
import { aulas } from "@/data/aulas";

export default function AulaPage({ params }: { params: { faculdade: string; slug: string } }) {
  const { faculdade, slug } = params;
  const faculdadeData = aulas[faculdade as keyof typeof aulas];
  if (!faculdadeData) return notFound();
  const aula = faculdadeData.find(a => a.slug === slug);
  if (!aula) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{aula.titulo}</h1>
      <p className="text-ice-muted mb-6">{aula.descricao}</p>
      <div className="bg-obsidian-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-3">📖 Conteúdo</h2>
        <p className="text-ice-muted whitespace-pre-line">{aula.conteudo}</p>
      </div>
      <div className="bg-black/40 border border-border rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-3">💻 Código exemplo</h2>
        <pre className="bg-obsidian p-3 rounded overflow-x-auto"><code>{aula.codigo}</code></pre>
      </div>
      <div className="bg-eletric/10 border border-eletric/30 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-3">🏆 Desafio</h2>
        <p className="text-ice-muted">{aula.desafio}</p>
        <button className="mt-4 bg-eletric text-obsidian px-4 py-2 rounded-full">Marcar como concluído (simular)</button>
      </div>
      <div className="mt-8">
        <Link href={`/faculdades/${faculdade}`} className="text-eletric">← Voltar para faculdade</Link>
      </div>
    </div>
  );
}
