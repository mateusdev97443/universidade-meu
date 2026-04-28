"use client";
import { useState } from "react";

const entregaveis = [
  { id: 1, nome: "Design System com tokens CSS", concluido: false },
  { id: 2, nome: "Dashboard com gráficos (recharts)", concluido: false },
  { id: 3, nome: "Editor Monaco com preview ao vivo", concluido: false },
  { id: 4, nome: "Simulador de entrevista dinâmico", concluido: false },
  { id: 5, nome: "Deploy na Vercel com CI/CD", concluido: false },
  { id: 6, nome: "Projeto final publicado no GitHub", concluido: false },
];

export function CapstoneInterativo() {
  const [checklist, setChecklist] = useState(entregaveis);
  const [avaliacao, setAvaliacao] = useState<string | null>(null);
  const [nota, setNota] = useState<number | null>(null);

  const toggleConcluido = (id: number) => {
    setChecklist(prev =>
      prev.map(item =>
        item.id === id ? { ...item, concluido: !item.concluido } : item
      )
    );
  };

  const calcularProgresso = () => {
    const concluidos = checklist.filter(item => item.concluido).length;
    return (concluidos / checklist.length) * 100;
  };

  const enviarAvaliacao = () => {
    const concluidos = checklist.filter(item => item.concluido).length;
    const notaFinal = (concluidos / checklist.length) * 100;
    setNota(notaFinal);
    if (notaFinal === 100) {
      setAvaliacao("✅ Excelente! Você completou todos os requisitos. Parabéns, Arquiteto Front-End!");
    } else if (notaFinal >= 70) {
      setAvaliacao(`⚠️ Bom trabalho! Você atingiu ${notaFinal}%. Revise os itens pendentes para alcançar a maestria.`);
    } else {
      setAvaliacao(`❌ Você completou ${notaFinal}% dos requisitos. Continue praticando e revisando os fundamentos.`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-obsidian-card border border-border rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">📋 Checklist de Entregáveis</h2>
        <div className="space-y-3">
          {checklist.map(item => (
            <label key={item.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={item.concluido}
                onChange={() => toggleConcluido(item.id)}
                className="w-5 h-5 accent-eletric"
              />
              <span className={item.concluido ? "line-through text-ice-muted" : "text-ice"}>
                {item.nome}
              </span>
            </label>
          ))}
        </div>
        <div className="mt-4">
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-eletric transition-all duration-300"
              style={{ width: `${calcularProgresso()}%` }}
            />
          </div>
          <p className="text-right text-sm text-ice-muted mt-1">
            {Math.round(calcularProgresso())}% concluído
          </p>
        </div>
      </div>

      <div className="bg-obsidian-card border border-border rounded-xl p-6 text-center">
        <h3 className="text-xl font-semibold mb-3">🏆 Finalizar Projeto</h3>
        <p className="text-ice-muted text-sm mb-4">
          Quando todos os entregáveis estiverem concluídos, clique no botão para receber sua avaliação.
        </p>
        <button
          onClick={enviarAvaliacao}
          className="bg-eletric text-obsidian px-6 py-2 rounded-full font-semibold hover:brightness-110 transition"
        >
          Enviar para avaliação
        </button>
      </div>

      {avaliacao && (
        <div className="bg-emerald/10 border border-emerald rounded-xl p-6 text-center">
          <div className="text-2xl mb-2">{nota === 100 ? "🏅" : "📘"}</div>
          <p className="text-ice font-medium">{avaliacao}</p>
          {nota !== null && (
            <div className="mt-3 text-sm text-ice-muted">
              Nota final: <strong className="text-eletric">{Math.round(nota)}%</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
