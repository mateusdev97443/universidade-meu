import Link from "next/link";
import { aulas } from "@/data/aulas";

type FaculdadeKey = keyof typeof aulas;

const faculdadesList = (Object.keys(aulas) as FaculdadeKey[]).map(key => {
  let nome = key;
  if (key === "fundamentos") nome = "Faculdade dos Fundamentos (HTML/CSS básico)";
  else if (key === "javascript") nome = "Faculdade JavaScript (Avançado)";
  else if (key === "react") nome = "Faculdade React";
  else if (key === "onboarding") nome = "🚀 Onboarding Profissional";
  else if (key === "fundamentosWeb") nome = "🌐 Fundamentos Profundos da Web";
  else if (key === "cssModerno") nome = "🎨 CSS Moderno";
  else nome = key.replace(/^./, c => c.toUpperCase());

  let icone = "📚";
  if (key === "onboarding") icone = "🛠️";
  else if (key === "fundamentosWeb") icone = "📡";
  else if (key === "cssModerno") icone = "🎨";

  return {
    slug: key,
    nome,
    descricao: `${aulas[key].length} aulas disponíveis`,
    icone
  };
});

export default function FaculdadesPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🏛️ Faculdades</h1>
      <p className="text-ice-muted mb-8">Escolha sua área de estudo</p>
      <div className="grid md:grid-cols-2 gap-6">
        {faculdadesList.map(fac => (
          <Link key={fac.slug} href={`/faculdades/${fac.slug}`}>
            <div className="bg-obsidian-card border border-border rounded-xl p-6 hover:border-eletric transition cursor-pointer">
              <div className="text-5xl mb-3">{fac.icone}</div>
              <h2 className="text-2xl font-semibold">{fac.nome}</h2>
              <p className="text-ice-muted mt-2">{fac.descricao}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
