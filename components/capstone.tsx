export function Capstone() {
  const requisitos = [
    "✅ Design System próprio com tokens e componentes reutilizáveis",
    "✅ Dashboard com gráficos (recharts) e dados mockados",
    "✅ Editor de código com preview ao vivo (Monaco)",
    "✅ Simulador de entrevista com 5 perguntas dinâmicas",
    "✅ Deploy na Vercel com integração contínua"
  ];
  return (
    <div className="space-y-6">
      <div className="bg-obsidian-card border border-border rounded-xl p-6 text-center">
        <div className="w-20 h-20 bg-eletric/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🏆</span>
        </div>
        <h2 className="text-2xl font-bold">Missão Final: Produto Real</h2>
        <p className="text-ice-muted mt-2 max-w-2xl mx-auto">
          Desenvolva uma plataforma completa de aprendizado (como uma versão simplificada da NEXUS) que demonstre todos os seus conhecimentos.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-obsidian-card border border-border rounded-xl p-5">
          <h3 className="text-xl font-semibold mb-3">📋 Entregáveis obrigatórios</h3>
          <ul className="space-y-2">
            {requisitos.map((req, i) => <li key={i} className="text-ice-muted">{req}</li>)}
          </ul>
        </div>
        <div className="bg-obsidian-card border border-border rounded-xl p-5">
          <h3 className="text-xl font-semibold mb-3">⏱️ Prazo e Avaliação</h3>
          <p className="text-ice-muted">30 dias para entregar. A avaliação será feita por mentores IA (simulação de code review) e por critérios de performance, acessibilidade e boas práticas.</p>
          <div className="mt-4 pt-4 border-t border-border">
            <span className="text-emerald font-bold">Bônus:</span> usar TypeScript e testes automatizados.
          </div>
        </div>
      </div>

      <div className="bg-obsidian-card border border-border rounded-xl p-5 text-center">
        <h3 className="text-xl font-semibold mb-2">📦 Inspiração</h3>
        <p className="text-ice-muted">Crie um produto real (ex: app de tarefas, dashboard financeiro, clonar um site famoso). O objetivo é mostrar autonomia e capacidade de entregar software profissional.</p>
        <a href="#" className="inline-block mt-4 bg-eletric text-obsidian px-6 py-2 rounded-full font-semibold hover:brightness-110 transition">
          Iniciar Projeto Final
        </a>
      </div>
    </div>
  );
}
