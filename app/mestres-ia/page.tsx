"use client";
import Link from "next/link";
import { useState } from "react";

const mestres = [
  { nome: "🧙 Mestre HTML", slug: "html", cor: "bg-orange-500" },
  { nome: "🎨 Mestre CSS", slug: "css", cor: "bg-blue-500" },
  { nome: "⚡ Mestre JavaScript", slug: "javascript", cor: "bg-yellow-500" },
  { nome: "🧪 Mestre TypeScript", slug: "typescript", cor: "bg-cyan-500" },
  { nome: "⚛️ Mestre React", slug: "react", cor: "bg-sky-500" },
  { nome: "🏗️ Mestre Arquitetura", slug: "arquitetura", cor: "bg-purple-500" },
  { nome: "📈 Mestre Performance", slug: "performance", cor: "bg-green-500" },
  { nome: "🎤 Mestre Entrevistas", slug: "entrevistas", cor: "bg-pink-500" },
];

export default function MestresIAPage() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");

  const fazerPergunta = () => {
    if (!pergunta.trim()) return;
    // Simulação de IA (depois integraremos OpenAI)
    setResposta(`🤖 Simulação: "${pergunta}" é um ótimo tópico. Um mestre estará disponível em breve para respondê-lo em detalhes.`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🧙 Câmara dos Mestres IA</h1>
      <p className="text-ice-muted mb-8">Escolha um mestre para tirar dúvidas ou peça ajuda diretamente.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {mestres.map((m) => (
          <Link href={`/mestres-ia/${m.slug}`} key={m.slug}>
            <div className={`${m.cor} bg-opacity-20 border border-${m.cor.split('-')[1]}-500 rounded-xl p-4 text-center hover:scale-105 transition`}>
              <div className="text-3xl mb-2">{m.nome.split(' ')[0]}</div>
              <span className="text-sm">{m.nome}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-obsidian-card border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">💬 Tire uma dúvida agora (simulação)</h2>
        <div className="flex gap-3">
          <input
            type="text"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            placeholder="Ex: Como funciona o closure em JavaScript?"
            className="flex-1 bg-obsidian border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-eletric"
          />
          <button onClick={fazerPergunta} className="bg-eletric text-obsidian px-6 py-2 rounded-lg font-semibold">
            Perguntar
          </button>
        </div>
        {resposta && (
          <div className="mt-4 p-3 bg-black/40 rounded-lg text-ice-muted">
            {resposta}
          </div>
        )}
      </div>
    </div>
  );
}
