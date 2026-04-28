"use client";
import { useState } from "react";
const cenarios = [
  { id: 1, titulo: "🔍 PR #001 - Estilo do botão", descricao: "Encontre problemas no CSS.", codigo: ".btn { background-color: blue; color: white; }", problemasEsperados: ["variável", "hover"], explicacao: "Use variáveis e hover." },
  { id: 2, titulo: "⚛️ PR #002 - Componente React", descricao: "Problemas de performance.", codigo: "function List({ items }) { return <ul>{items.map(i => <li>{i.name}</li>)}</ul>; }", problemasEsperados: ["key"], explicacao: "Faltou a prop key." }
];
export function SimuladorProducao() {
  const [revisoes, setRevisoes] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  const enviar = (id, texto) => {
    const c = cenarios.find(x => x.id === id);
    const ok = c.problemasEsperados.some(p => texto.toLowerCase().includes(p));
    setFeedbacks(f => ({ ...f, [id]: ok ? "✅ Bom review!" : "❌ Revise novamente." }));
  };
  return (
    <div className="space-y-6">
      {cenarios.map(c => (
        <div key={c.id} className="bg-obsidian-card border border-border rounded-xl p-5">
          <h3 className="text-xl font-semibold">{c.titulo}</h3>
          <p className="text-ice-muted">{c.descricao}</p>
          <pre className="bg-black/40 p-3 rounded mt-2 text-sm">{c.codigo}</pre>
          <textarea rows={3} className="w-full bg-obsidian border border-border rounded mt-3 p-2" placeholder="Seu review..." onChange={e => setRevisoes(r => ({...r, [c.id]: e.target.value}))} />
          <button onClick={() => enviar(c.id, revisoes[c.id] || "")} className="bg-eletric text-obsidian px-4 py-1 rounded-full mt-2">Enviar review</button>
          {feedbacks[c.id] && <div className="mt-2 text-sm">{feedbacks[c.id]}</div>}
        </div>
      ))}
    </div>
  );
}
