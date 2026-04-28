"use client";
import { useState } from "react";

const desafios = [
  {
    id: 1,
    titulo: "🔍 Debugging: Corrija o CSS",
    descricao: "O botão abaixo não está centralizado. Ajuste o CSS para que fique no meio da tela.",
    codigoInicial: `<div style="display: flex; justify-content: start; align-items: start; height: 200px;">
  <button>Clique aqui</button>
</div>`,
    solucao: "justify-content: center; align-items: center;",
    dica: "Mude os valores de justify-content e align-items para 'center'."
  },
  {
    id: 2,
    titulo: "🧠 Lógica: Array.map()",
    descricao: "Dado um array [1,2,3,4,5], use JavaScript para retornar um novo array com cada número multiplicado por 2.",
    codigoInicial: `const numeros = [1,2,3,4,5];
// escreva seu código aqui
const resultado = numeros.???`,
    solucao: ".map(n => n * 2)",
    dica: "Use o método map() e uma arrow function."
  },
  {
    id: 3,
    titulo: "⚛️ React: Estado",
    descricao: "Crie um contador simples (useState) que incrementa ao clicar num botão.",
    codigoInicial: `function Contador() {
  // declare o estado aqui
  return <button>Clique</button>;
}`,
    solucao: "const [count, setCount] = useState(0); onClick={() => setCount(count+1)}",
    dica: "useState retorna um array com o valor e a função atualizadora."
  }
];

export function ArenaProblemas() {
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: string | null }>({});

  const verificar = (id: number, resposta: string) => {
    const desafio = desafios.find(d => d.id === id);
    if (!desafio) return;
    const isCorrect = resposta.trim().toLowerCase().includes(desafio.solucao.toLowerCase());
    setFeedback(prev => ({
      ...prev,
      [id]: isCorrect ? "✅ Correto! Avance para o próximo." : "❌ Incorreto. Tente novamente ou peça uma dica."
    }));
  };

  return (
    <div className="space-y-8">
      {desafios.map((desafio) => (
        <div key={desafio.id} className="bg-obsidian-card border border-border rounded-xl p-5">
          <h3 className="text-xl font-semibold mb-2">{desafio.titulo}</h3>
          <p className="text-ice-muted mb-3">{desafio.descricao}</p>
          <pre className="bg-black/40 rounded-lg p-3 text-sm font-mono overflow-x-auto mb-3">
            {desafio.codigoInicial}
          </pre>
          <textarea
            rows={3}
            value={respostas[desafio.id] || ""}
            onChange={(e) => setRespostas(prev => ({ ...prev, [desafio.id]: e.target.value }))}
            placeholder="Digite sua solução aqui..."
            className="w-full bg-obsidian border border-border rounded-lg p-3 text-sm font-mono focus:outline-none focus:border-eletric"
          />
          <div className="flex gap-3 mt-3">
            <button
              onClick={() => verificar(desafio.id, respostas[desafio.id] || "")}
              className="bg-eletric text-obsidian px-4 py-2 rounded-full text-sm"
            >
              Verificar
            </button>
            <details className="text-ice-muted text-sm">
              <summary className="cursor-pointer">💡 Dica</summary>
              <p className="mt-1 p-2 bg-obsidian rounded">{desafio.dica}</p>
            </details>
          </div>
          {feedback[desafio.id] && (
            <div className={`mt-3 text-sm ${feedback[desafio.id]?.includes("✅") ? "text-emerald" : "text-red-400"}`}>
              {feedback[desafio.id]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
