"use client";
import { useState } from "react";

export function Jarvis() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("Olá! Sou Jarvis (Groq). Pergunte qualquer coisa sobre front-end!");
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
      setResposta(data.reply || "Erro.");
    } catch {
      setResposta("❌ Erro de conexão.");
    } finally {
      setLoading(false);
      setPergunta("");
    }
  };

  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-5">
      <h3 className="text-xl font-semibold mb-3">🧠 Jarvis IA (Groq – gratuito)</h3>
      <div className="bg-black/40 rounded-lg p-3 mb-4 min-h-[80px]">
        <p className="text-ice-muted text-sm">{resposta}</p>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
          placeholder="Ex: Como funciona o Virtual DOM?"
          className="flex-1 bg-obsidian border border-border rounded-lg px-3 py-2 text-sm"
          disabled={loading}
        />
        <button onClick={fazerPergunta} disabled={loading} className="bg-eletric text-obsidian px-4 py-2 rounded-lg disabled:opacity-50">
          {loading ? "..." : "Perguntar"}
        </button>
      </div>
    </div>
  );
}
