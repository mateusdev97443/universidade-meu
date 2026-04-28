export default function CarreiraPage() {
  const recursos = [
    { titulo: "📄 Portfólio Profissional", desc: "Como criar um portfólio que impressiona recrutadores." },
    { titulo: "🐙 GitHub Estratégico", desc: "Organize seus repositórios, documente projetos e contribua." },
    { titulo: "🔗 LinkedIn para Devs", desc: "Otimize seu perfil, publique conteúdo técnico e faça networking." },
    { titulo: "🎯 Preparação para Entrevistas", desc: "Perguntas comuns, dicas de comportamento e negociação." },
  ];
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🚀 Carreira & Hired Engine</h1>
      <p className="text-ice-muted mb-8">Prepare-se para conquistar sua primeira vaga e crescer como profissional.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {recursos.map((r, i) => (
          <div key={i} className="bg-obsidian-card border border-border rounded-xl p-5 hover:border-eletric transition">
            <h3 className="text-xl font-semibold mb-2">{r.titulo}</h3>
            <p className="text-ice-muted">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
