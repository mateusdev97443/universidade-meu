"use client";
import { useState } from "react";

export function Jarvis() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("Olá! Sou o Jarvis, seu assistente de front-end. Pergunte algo sobre HTML, CSS, JS, React, carreira...");
  const [loading, setLoading] = useState(false);

  const gerarResposta = (texto: string) => {
    const lower = texto.toLowerCase();
    if (lower.includes("closure")) return "📦 Closure é a combinação de uma função com seu escopo léxico. Em JS, toda função tem acesso às variáveis do pai, mesmo após o pai ter retornado. É fundamental para entender `setTimeout` loops e callbacks.";
    if (lower.includes("flexbox")) return "🎯 Flexbox é unidimensional (linha OU coluna). Use `display: flex`, `justify-content` (eixo principal) e `align-items` (eixo cruzado). Perfeito para menus, cards e alinhamentos.";
    if (lower.includes("grid")) return "🧩 CSS Grid é bidimensional (linhas E colunas). Ideal para layouts complexos, com `grid-template-columns/rows` e `gap`. Junte com Flexbox para maior poder.";
    if (lower.includes("react")) return "⚛️ React é biblioteca para interfaces, baseada em componentes reutilizáveis, estado (`useState`) e efeitos (`useEffect`). É o padrão da indústria.";
    if (lower.includes("hoisting")) return "🚀 Hoisting: declarações de `var` e `function` são içadas ao topo do escopo antes da execução. Já `let` e `const` entram em TDZ (Temporal Dead Zone).";
    if (lower.includes("var") || lower.includes("let") || lower.includes("const")) return "📌 `var` tem escopo de função e sofre hoisting, `let` e `const` têm escopo de bloco e não permitem redeclaração. Use `const` por padrão, `let` se precisar reatribuir.";
    if (lower.includes("promise") || lower.includes("async")) return "⏳ Promises e async/await resolvem a pirâmide do callback. `async` sempre retorna uma Promise, `await` pausa até a Promise ser resolvida.";
    if (lower.includes("portfólio") || lower.includes("github")) return "🔗 Mantenha seu GitHub organizado, documente projetos, publique seu portfólio em Vercel/Netlify. Um bom README e demonstração ao vivo contam muito!";
    if (lower.includes("entrevista")) return "💼 Pratique live coding, estude padrões de projeto, revisite fundamentos (closures, prototypal inheritance, event loop). Seja humilde e mostre vontade de aprender.";
    return "❓ Ainda não tenho uma resposta pronta para isso. Mas recomendo pesquisar no MDN, na documentação do React ou no freeCodeCamp. Continue praticando!";
  };

  const fazerPergunta = () => {
    if (!pergunta.trim()) return;
    setLoading(true);
    setResposta("🤖 Pensando...");
    setTimeout(() => {
      const respostaGerada = gerarResposta(pergunta);
      setResposta(respostaGerada);
      setLoading(false);
    }, 400);
  };

  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-5">
      <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
        <span className="text-eletric">🧠 Jarvis IA (modo simulação)</span>
        <span className="text-xs text-ice-muted">(respostas educativas – sem API)</span>
      </h3>
      <div className="bg-black/40 rounded-lg p-3 mb-4 min-h-[80px]">
        <p className="text-ice-muted text-sm">{resposta}</p>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
          placeholder="Ex: O que é closure em JavaScript? ou dicas para entrevista"
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
