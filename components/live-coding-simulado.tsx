"use client";
import { useState } from "react";

export function LiveCodingSimulado() {
  const [resposta, setResposta] = useState("");
  const [feedback, setFeedback] = useState("");

  const verificar = () => {
    if (resposta.toLowerCase().includes("flex") && resposta.toLowerCase().includes("center")) {
      setFeedback("✅ Correto! Você centralizou com flexbox. Ótimo para entrevistas.");
    } else {
      setFeedback("❌ Quase lá! Lembre-se de usar display: flex, justify-content: center e align-items: center.");
    }
  };

  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-5 mt-8">
      <h3 className="text-xl font-semibold mb-2">💻 Desafio de Live Coding</h3>
      <p className="text-ice-muted text-sm mb-3">Como você centralizaria um div dentro de outro usando CSS moderno?</p>
      <textarea
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        rows={4}
        className="w-full bg-obsidian border border-border rounded-lg p-3 font-mono text-sm focus:outline-none focus:border-eletric"
        placeholder="Escreva seu código CSS aqui..."
      />
      <div className="flex justify-between mt-3">
        <button onClick={verificar} className="bg-eletric text-obsidian px-4 py-2 rounded-full text-sm">
          Verificar resposta
        </button>
        {feedback && <span className="text-ice-muted text-sm self-center">{feedback}</span>}
      </div>
    </div>
  );
}
