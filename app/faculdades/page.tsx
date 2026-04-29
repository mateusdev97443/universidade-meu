import Link from "next/link";

const faculdadesList = [
  { slug: "fundamentos", nome: "Faculdade dos Fundamentos", desc: "HTML, CSS, lógica.", icone: "📘" },
  { slug: "javascript", nome: "Faculdade JavaScript", desc: "Domínio profundo em JS.", icone: "⚡" },
  { slug: "react", nome: "Faculdade React", desc: "Maestria React.", icone: "⚛️" },
  { slug: "arquitetura", nome: "Faculdade Arquitetura Front-End", desc: "Design systems, performance.", icone: "🏗️" },
];

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
              <p className="text-ice-muted mt-2">{fac.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
