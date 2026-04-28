"use client";
import { useState } from "react";

const topicos = [
  {
    titulo: "🎨 Design Systems",
    descricao: "Aprenda a criar sistemas de design escaláveis, componentização, tokens e documentação.",
    nivel: "Avançado",
    cor: "bg-purple-500",
  },
  {
    titulo: "⚡ Performance Web",
    descricao: "Otimização de carregamento, code splitting, lazy loading, Core Web Vitals.",
    nivel: "Intermediário/Avançado",
    cor: "bg-emerald-500",
  },
  {
    titulo: "🏗️ Arquitetura de Componentes",
    descricao: "Atomic Design, Composition Pattern, Render Props, HOCs, Custom Hooks.",
    nivel: "Intermediário",
    cor: "bg-eletric",
  },
  {
    titulo: "🧩 Padrões de Projeto",
    descricao: "Singleton, Factory, Observer, Strategy – aplicados ao Front-End.",
    nivel: "Avançado",
    cor: "bg-amber-500",
  },
  {
    titulo: "🌐 Escalabilidade e Manutenção",
    descricao: "Monorepo, micro-frontends, estrutura de pastas, convenções, testes.",
    nivel: "Avançado",
    cor: "bg-rose-500",
  },
];

export function AcademiaArquitetura() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topicos.map((topico, idx) => (
        <div key={idx} className="bg-obsidian-card border border-border rounded-xl p-5 hover:border-eletric transition">
          <div className={`w-12 h-12 rounded-full ${topico.cor} flex items-center justify-center text-white font-bold mb-3`}>
            {idx+1}
          </div>
          <h3 className="text-xl font-semibold mb-2">{topico.titulo}</h3>
          <p className="text-ice-muted text-sm">{topico.descricao}</p>
          <span className="inline-block mt-3 text-xs bg-obsidian px-2 py-1 rounded-full text-ice-muted">
            {topico.nivel}
          </span>
        </div>
      ))}
    </div>
  );
}
