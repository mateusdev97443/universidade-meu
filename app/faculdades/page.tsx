import Link from "next/link";
import { aulas } from "@/data/aulas";

type FaculdadeKey = keyof typeof aulas;

// Mapeamento explícito de nomes e ícones
const nomesMap: Record<FaculdadeKey, string> = {
  fundamentos: "Faculdade dos Fundamentos (HTML/CSS básico)",
  javascript: "Faculdade JavaScript (Avançado)",
  react: "Faculdade React",
  onboarding: "🚀 Onboarding Profissional",
  fundamentosWeb: "🌐 Fundamentos Profundos da Web",
  cssModerno: "🎨 CSS Moderno",
};

const iconesMap: Record<FaculdadeKey, string> = {
  fundamentos: "📚",
  javascript: "📘",
  react: "⚛️",
  onboarding: "🛠️",
  fundamentosWeb: "📡",
  cssModerno: "🎨",
};

const faculdadesList = (Object.keys(aulas) as FaculdadeKey[]).map((key) => ({
  slug: key,
  nome: nomesMap[key] || key.replace(/^./, (c) => c.toUpperCase()),
  descricao: `${aulas[key].length} aulas disponíveis`,
  icone: iconesMap[key] || "📚",
}));

export default function FaculdadesPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🏛️ Faculdades</h1>
      <p className="text-ice-muted mb-8">Escolha sua área de estudo</p>
      <div className="grid md:grid-cols-2 gap-6">
        {faculdadesList.map((fac) => (
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
