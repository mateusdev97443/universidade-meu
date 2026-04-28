"use client";
import { useState } from "react";

const cenarios = [
  {
    id: 1,
    titulo: "🔍 Pull Request #001 - Estilo do botão",
    descricao: "Um desenvolvedor criou um botão, mas o código não segue as boas práticas. Encontre os problemas e sugira melhorias.",
    codigo: `.btn {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}`,
    problemasEsperados: ["usar variável de cor", "hover", "foco", "unidades relativas"],
    explicacao: "Faltou definir hover, focus e usar variáveis CSS. Também seria bom usar `rem` em vez de `px`."
  },
  {
    id: 2,
    titulo: "⚛️ Pull Request #002 - Componente React",
    descricao: "Esse componente lista itens, mas tem problemas de performance e legibilidade.",
    codigo: `function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => <li>{item.name}</li>)}
    </ul>
  );
}`,
    problemasEsperados: ["key", "fragmento desnecessário", "desestruturação"],
    explicacao: "Faltou a prop `key` no `li`, que é essencial para performance. Também poderia desestruturar `items`."
  }
];

export function SimuladorProducao() {
  const [revisoes, setRevisoes] = useState<{ [key: number]: string }>({});
  const [feedbacks, setFeedbacks] = useState<{ [key: number]: string | null }>({});

  const enviarRevisao = (id: number, texto: string) => {
    const cen = cenarios.find(c => c.id === id);
    if (!cen) return;
    const acertou = cen.problemasEsperados.some(prob => texto.toLowerCase().includes(prob.toLowerCase()));
    setFeedbacks(prev => ({
      ...prev,
      [id]: acertou
        ? "✅ Bom trabalho! Seu review apontou pontos relevantes. Confira a explicação completa."
        : "❌ Revise novamente: tente identificar problemas de performance, acessibilidade ou boas práticas."
    }));
  };

  return (
    <div className="space-y-8">
      {cenarios.map(cen => (
        <div key={cen.id} className="bg-obsidian-card border border-border rounded-xl p-5">
          <h3 className="text-xl font-semibold mb-2">{cen.titulo}</h3>
          <p className="text-ice-muted mb-3">{cen.descricao}</p>
          <pre className="bg-black/40 rounded-lg p-3 text-sm font-mono overflow-x-auto mb-3">
            {cen.codigo}
          </pre>
          <textarea
            rows={4}
            value={revisoes[cen.id] || ""}
            onChange={(e) => setRevisoes(prev => ({ ...prev, [cen.id]: e.target.value }))}
            placeholder="Escreva seu code review aqui (aponte os problemas e sugira correções)..."
            className="w-full bg-obsidian border border-border rounded-lg p-3 text-sm font-mono focus:outline-none focus:border-eletric"
          />
          <div className="flex gap-3 mt-3">
            <button
              onClick={() => enviarRevisao(cen.id, revisoes[cen.id] || "")}
              className="bg-eletric text-obsidian px-4 py-2 rounded-full text-sm"
            >
              Enviar review
            </button>
            <details className="text-ice-muted text-sm">
              <summary className="cursor-pointer">💡 Dica / Explicação</summary>
              <p className="mt-1 p-2 bg-obsidian rounded">{cen.explicacao}</p>
            </details>
          </div>
          {feedbacks[cen.id] && (
            <div className={`mt-3 text-sm ${feedbacks[cen.id]?.includes("✅") ? "text-emerald" : "text-red-400"}`}>
              {feedbacks[cen.id]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
