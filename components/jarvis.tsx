"use client";
import { useState } from "react";

export function Jarvis() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("Olá, sou seu assistente IA real. Pergunte algo sobre Front-End!");
  const [loading, setLoading] = useState(false);

  const fazerPergunta = async () => {
    if (!pergunta.trim()) return;
    setLoading(true);
    setResposta("🤖 Pensando...");
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: pergunta }] })
      });
      const data = await res.json();
      setResposta(data.reply || "Não consegui responder agora. Tente novamente.");
    } catch (error) {
      setResposta("❌ Erro de conexão. Tente mais tarde.");
    } finally {
      setLoading(false);
      setPergunta("");
    }
  };

  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-5">
      <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
        <span className="text-eletric">🧠 Jarvis IA (OpenAI)</span> <span className="text-xs text-ice-muted">(respondendo de verdade)</span>
      </h3>
      <div className="bg-black/40 rounded-lg p-3 mb-4 min-h-[80px]">
        <p className="text-ice-muted text-sm">{resposta}</p>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
          placeholder="Ex: O que é closure em JavaScript?"
          className="flex-1 bg-obsidian border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-eletric"
          disabled={loading}
        />
        <button
          onClick={fazerPergunta}
          disabled={loading}
          className="bg-eletric text-obsidian px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
        >
          {loading ? "..." : "Perguntar"}
        </button>
      </div>
    </div>
  );
}
