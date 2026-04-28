"use client";
import { useState } from "react";
import { useXP } from "@/contexts/XPContext";

export function MissaoDoDia() {
  const { addXP } = useXP();
  const [concluida, setConcluida] = useState(false);
  const missoes = [
    "Complete o desafio de flexbox no Laboratório",
    "Assista à aula sobre closures em JavaScript",
    "Refatore um componente React do seu projeto",
  ];
  const missao = missoes[Math.floor(Math.random() * missoes.length)];
  const [mensagem, setMensagem] = useState("");

  const completarMissao = () => {
    if (!concluida) {
      addXP(50);
      setConcluida(true);
      setMensagem("🎉 +50 XP! Missão concluída!");
    }
  };

  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-5">
      <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
        🎯 Missão do dia
      </h3>
      <p className="text-ice text-lg">{missao}</p>
      <button
        onClick={completarMissao}
        disabled={concluida}
        className="mt-3 bg-eletric text-obsidian px-4 py-2 rounded-full text-sm disabled:opacity-50"
      >
        {concluida ? "✓ Missão cumprida" : "Concluir missão"}
      </button>
      {mensagem && <p className="mt-2 text-emerald text-sm">{mensagem}</p>}
    </div>
  );
}
