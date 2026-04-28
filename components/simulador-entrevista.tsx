"use client";
import { useState } from "react";

const perguntas = [
  {
    id: 1,
    pergunta: "O que é hoisting em JavaScript?",
    opcoes: [
      "Comportamento de mover declarações para o topo do escopo",
      "Uma forma de otimizar loops",
      "Um tipo de dado primitivo",
      "Um método de array",
    ],
    correta: 0,
    explicacao: "Hoisting é o comportamento do JavaScript de mover declarações (var, function) para o topo do seu escopo durante a fase de compilação."
  },
  {
    id: 2,
    pergunta: "Qual a diferença entre == e ===?",
    opcoes: [
      "== compara valor e tipo, === compara apenas valor",
      "== compara apenas valor, === compara valor e tipo",
      "São idênticos",
      "== só funciona com números",
    ],
    correta: 1,
    explicacao: "== faz coerção de tipos, === não faz coerção, exigindo que os tipos sejam iguais."
  },
  {
    id: 3,
    pergunta: "O que é o Virtual DOM no React?",
    opcoes: [
      "Uma cópia leve do DOM real usada para otimizar atualizações",
      "Um banco de dados virtual",
      "Um novo tipo de componente",
      "Um hook nativo",
    ],
    correta: 0,
    explicacao: "O Virtual DOM é uma representação em memória do DOM real. React o usa para calcular a menor diferença e atualizar apenas o necessário."
  },
];

export function SimuladorEntrevista() {
  const [respostas, setRespostas] = useState<{ [key: number]: number | null }>({});
  const [finalizado, setFinalizado] = useState(false);

  const handleResposta = (id: number, idx: number) => {
    setRespostas((prev) => ({ ...prev, [id]: idx }));
  };

  const finalizar = () => {
    setFinalizado(true);
  };

  const calcularAcertos = () => {
    let acertos = 0;
    perguntas.forEach((p) => {
      if (respostas[p.id] === p.correta) acertos++;
    });
    return acertos;
  };

  if (finalizado) {
    const acertos = calcularAcertos();
    return (
      <div className="bg-obsidian-card border border-border rounded-xl p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">🎯 Resultado da Simulação</h2>
        <p className="text-4xl text-eletric font-bold mb-2">{acertos} / {perguntas.length}</p>
        <p className="text-ice-muted mb-6">
          {acertos === perguntas.length
            ? "Excelente! Você está preparado para entrevistas técnicas."
            : "Revise os conceitos e tente novamente. A prática leva à maestria."}
        </p>
        <button
          onClick={() => {
            setRespostas({});
            setFinalizado(false);
          }}
          className="bg-eletric text-obsidian px-6 py-2 rounded-full"
        >
          Refazer simulação
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {perguntas.map((p, idx) => (
        <div key={p.id} className="bg-obsidian-card border border-border rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-3">
            {idx+1}. {p.pergunta}
          </h3>
          <div className="space-y-2">
            {p.opcoes.map((opcao, i) => (
              <label key={i} className="flex items-center gap-3 text-ice-muted hover:text-ice cursor-pointer">
                <input
                  type="radio"
                  name={`pergunta-${p.id}`}
                  value={i}
                  checked={respostas[p.id] === i}
                  onChange={() => handleResposta(p.id, i)}
                  className="w-4 h-4 accent-eletric"
                />
                {opcao}
              </label>
            ))}
          </div>
          {respostas[p.id] !== undefined && respostas[p.id] !== p.correta && (
            <div className="mt-3 text-sm text-emerald border-t border-border pt-2">
              💡 <span className="font-semibold">Dica:</span> {p.explicacao}
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-end">
        <button
          onClick={finalizar}
          className="bg-eletric text-obsidian px-8 py-3 rounded-full font-semibold"
        >
          Finalizar e ver resultado
        </button>
      </div>
    </div>
  );
}
