import { notFound } from "next/navigation";
import Link from "next/link";
import { aulas } from "@/data/aulas";

export default function FaculdadeSlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const faculdade = aulas[slug as keyof typeof aulas];
  if (!faculdade) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{slug.replace(/^./, c => c.toUpperCase())}</h1>
      <p className="text-ice-muted mb-8">Conteúdo de elite</p>
      <div className="space-y-4">
        {faculdade.map((aula, idx) => (
          <Link key={aula.slug} href={`/sala-de-aula/${slug}/${aula.slug}`}>
            <div className="bg-obsidian-card border border-border rounded-xl p-5 hover:border-eletric transition cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-eletric font-bold text-xl">{idx+1}</span>
                <div>
                  <h2 className="text-xl font-semibold">{aula.titulo}</h2>
                  <p className="text-ice-muted text-sm">{aula.descricao}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
