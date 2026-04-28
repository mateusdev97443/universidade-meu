export default function JornadaPage() {
  const niveis = [
    { nome: "🌱 Iniciante", desc: "Primeiros passos, lógica e fundamentos", cor: "bg-green-500" },
    { nome: "📚 Fundamentos", desc: "HTML, CSS, JavaScript essencial", cor: "bg-blue-500" },
    { nome: "⚡ Júnior", desc: "JavaScript avançado, DOM, APIs", cor: "bg-yellow-500" },
    { nome: "🚀 Profissional", desc: "React, TypeScript, ferramentas modernas", cor: "bg-purple-500" },
    { nome: "🧙 Master", desc: "Arquitetura, performance, testes", cor: "bg-pink-500" },
    { nome: "🏛️ Arquiteto", desc: "Design systems, micro-frontends, liderança técnica", cor: "bg-red-500" },
  ];
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🗺️ Jornada Zero → Elite</h1>
      <p className="text-ice-muted mb-8">Sua evolução rumo à maestria</p>
      <div className="grid gap-6 md:grid-cols-2">
        {niveis.map((n, idx) => (
          <div key={idx} className="bg-obsidian-card border border-border rounded-xl p-6 hover:border-eletric transition">
            <div className={`w-12 h-12 rounded-full ${n.cor} flex items-center justify-center text-white font-bold mb-4`}>
              {idx+1}
            </div>
            <h2 className="text-2xl font-semibold">{n.nome}</h2>
            <p className="text-ice-muted mt-2">{n.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
