import { motion } from "framer-motion";

export function MissaoDoDia() {
  const missoes = [
    "Complete o desafio de flexbox no Laboratório",
    "Assista à aula sobre closures em JavaScript",
    "Refatore um componente React do seu projeto",
  ];
  const missao = missoes[Math.floor(Math.random() * missoes.length)];

  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-5">
      <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
        🎯 Missão do dia
      </h3>
      <p className="text-ice text-lg">{missao}</p>
      <div className="mt-3 h-1.5 w-full bg-border rounded-full overflow-hidden">
        <div className="bg-eletric w-0 h-full rounded-full animate-pulse" style={{ width: "30%" }}></div>
      </div>
      <p className="text-right text-xs text-ice-muted mt-1">Progresso: 30%</p>
    </div>
  );
}
