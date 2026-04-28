export function Evolucao() {
  const xp = 1250;
  const proximoNivel = 2000;
  const nivel = Math.floor(xp / 500) + 1;
  const progresso = (xp / proximoNivel) * 100;

  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-5">
      <h3 className="text-xl font-semibold mb-2">📈 Evolução técnica</h3>
      <div className="flex justify-between items-baseline">
        <span className="text-3xl font-bold text-eletric">{xp} XP</span>
        <span className="text-ice-muted">Nível {nivel}</span>
      </div>
      <div className="mt-2 h-2 w-full bg-border rounded-full overflow-hidden">
        <div className="bg-emerald h-2 rounded-full" style={{ width: `${progresso}%` }}></div>
      </div>
      <p className="text-xs text-ice-muted mt-1">Próximo nível: {proximoNivel - xp} XP restantes</p>
    </div>
  );
}
