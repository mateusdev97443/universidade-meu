export function Capstone() {
  const requisitos = [
    "✅ Design System próprio com tokens",
    "✅ Dashboard com gráficos reais",
    "✅ Editor de código com preview",
    "✅ Simulador de entrevista dinâmico",
    "✅ Deploy na Vercel automático"
  ];
  return (
    <div className="space-y-6">
      <div className="bg-obsidian-card border border-border rounded-xl p-6 text-center">
        <div className="w-20 h-20 bg-eletric/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🏆</span>
        </div>
        <h2 className="text-2xl font-bold">Missão Final: Produto Real</h2>
        <p className="text-ice-muted mt-2">Desenvolva uma plataforma completa de aprendizado estilo NEXUS.</p>
      </div>
      <div className="bg-obsidian-card border border-border rounded-xl p-5">
        <h3 className="text-xl font-semibold mb-3">📋 Entregáveis obrigatórios</h3>
        <ul className="space-y-2">
          {requisitos.map((req, i) => <li key={i} className="text-ice-muted">{req}</li>)}
        </ul>
      </div>
      <div className="bg-obsidian-card border border-border rounded-xl p-5 text-center">
        <a href="#" className="inline-block bg-eletric text-obsidian px-6 py-2 rounded-full">Iniciar Projeto Final</a>
      </div>
    </div>
  );
}
