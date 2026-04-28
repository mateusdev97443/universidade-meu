export default function CapstoneNexusPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🎓 PROJETO FINAL – CAPSTONE NEXUS</h1>
      <p className="text-ice-muted mb-6">Seu rito de passagem para provar maestria.</p>
      <div className="bg-eletric/10 border border-eletric rounded-xl p-6 my-4">
        <h2 className="text-2xl font-semibold">✅ Entregáveis obrigatórios</h2>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>Design System com tokens CSS e componentes reutilizáveis</li>
          <li>Dashboard com gráficos (recharts) e dados mockados</li>
          <li>Editor de código Monaco com preview ao vivo</li>
          <li>Simulador de entrevista com 5 perguntas dinâmicas</li>
          <li>Deploy na Vercel com integração contínua</li>
        </ul>
      </div>
      <div className="bg-obsidian-card border border-border rounded-xl p-6 text-center">
        <span className="text-emerald text-2xl block">🏆 Inicie sua jornada final</span>
        <p className="text-ice-muted text-sm mt-2">Prazo: 30 dias | Avaliação por mentores IA</p>
      </div>
    </div>
  );
}
