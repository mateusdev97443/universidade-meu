// ==============================================
// Dados de todas as faculdades e aulas
// ==============================================

export const aulas = {
  // ---------- MÓDULO 0: Onboarding Profissional ----------
  onboarding: [
    {
      slug: "ambiente-guerra",
      titulo: "Ambiente de Guerra: Terminal, Git e VS Code como um Sênior",
      descricao: "Configure ferramentas como um profissional de elite.",
      conteudo: `## Objetivo\nVocê não apenas instala – você domina atalhos, automação e boas práticas.\n\n### Configuração essencial\n- Zsh + Oh My Zsh + plugins (autosuggestion, syntax-highlighting)\n- Aliases úteis: \`alias gst="git status"\`, \`alias glog="git log --oneline --graph"\`\n- Git com \`core.editor\` configurado e \`.gitconfig\` com nome/email\n- VS Code: extensões ESLint, Prettier, Thunder Client, GitLens; snippets customizados\n\n### Automação\nConfigure tarefas no \`package.json\`: \`"dev": "next dev"\`, \`"build": "next build"\`. Mapeie teclas de atalho no VS Code.`,
      codigo: "alias gst='git status'\nalias glog='git log --oneline --graph'",
      desafio: "Crie um alias para `git commit -m \"wip\"` e outro para fazer push automático. Em uma simulação de hotfix, use `--force-with-lease` para corrigir um commit errado."
    },
    {
      slug: "linkedin-github-portfolio",
      titulo: "LinkedIn e GitHub como Portfólio Vivo",
      descricao: "Otimize perfis para recrutadores técnicos.",
      conteudo: `## Estratégia\nRecrutadores usam ferramentas de busca.\n\n### LinkedIn\n- Título: "Desenvolvedor Front‑End" (não "aspirante")\n- Descrição com palavras‑chave: React, TypeScript, Next.js, Tailwind\n- Foto profissional, capa personalizada, recomendações\n\n### GitHub\n- README profissional no perfil (https://github.com/seu-user/seu-user)\n- Projetos pinados com READMEs completos (visão geral, stack, instruções, deploy)\n- Badges de build, deploy, testes\n- Commits semânticos e frequentes`,
      codigo: "<!-- Exemplo de estrutura de README -->\n# Projeto X\n\n## Visão geral\n...\n## Stack\n...\n## Como executar\n...\n## Deploy\n...",
      desafio: "Crie um README para o repositório da NEXUS University com badges e instruções. Otimize seu perfil GitHub com pinagem e README pessoal."
    }
  ],

  // ---------- MÓDULO 1: Fundamentos Profundos da Web ----------
  fundamentosWeb: [
    {
      slug: "http-protocolo",
      titulo: "HTTP/HTTPS: O Protocolo que Você Ignorava",
      descricao: "Métodos, status, headers, CORS.",
      conteudo: `## Métodos\nGET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS.\n\n## Status codes\n- 2xx: sucesso (200 OK, 201 Created, 204 No Content)\n- 3xx: redirecionamento (301, 302, 304)\n- 4xx: erro do cliente (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)\n- 5xx: erro do servidor (500 Internal Server Error, 502 Bad Gateway)\n\n## Headers importantes\n- \`Content-Type\`: application/json\n- \`Authorization\`: Bearer token\n- \`Cache-Control\`: no-cache, max-age\n\n## CORS\nCross-Origin Resource Sharing – necessário quando front-end em domínio diferente do back-end. Solução: proxy, headers \`Access-Control-Allow-Origin\`.`,
      codigo: "// Exemplo de fetch com tratamento de erro\nfetch('https://api.exemplo.com/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'João' })\n})\n.then(res => {\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json();\n})\n.then(data => console.log(data))\n.catch(err => console.error(err));",
      desafio: "Use curl ou DevTools para inspecionar uma requisição de login de um site real. Identifique método, status, payload e headers de cache. Implemente uma função de retry com backoff exponencial para uma requisição que pode falhar com 429."
    },
    {
      slug: "html-semantico",
      titulo: "HTML Semântico e Estrutura de Documento Acessível",
      descricao: "Código que comunica significado.",
      conteudo: `## Elementos estruturais\n- \`<header>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<nav>\`, \`<aside>\`, \`<footer>\`\n- Hierarquia de headings: um \`<h1>\` por página, depois \`<h2>\`, \`<h3>\` sem pular níveis\n\n## Acessibilidade\n- \`alt\` descritivo em imagens\n- \`lang\` no html\n- \`title\` na página\n- ARIA apenas quando necessário (\`role="button"\` em div clicável, mas prefira \`<button>\`)`,
      codigo: "<!DOCTYPE html>\n<html lang=\"pt\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Página Semântica</title>\n</head>\n<body>\n  <header>... conteúdo do cabeçalho ...</header>\n  <main>\n    <article>\n      <h1>Título principal</h1>\n      <p>Conteúdo...</p>\n    </article>\n  </main>\n  <footer>...</footer>\n</body>\n</html>",
      desafio: "Converta uma página pessoal qualquer (cheia de divs) para HTML semântico. Execute Lighthouse e axe DevTools e atinja 100% em acessibilidade e boas práticas."
    }
  ],

  // ---------- MÓDULO 2: CSS Moderno ----------
  cssModerno: [
    {
      slug: "flexbox-profundo",
      titulo: "Flexbox Não é Só Centralizar",
      descricao: "Controle total de layout unidimensional.",
      conteudo: `## Propriedades essenciais\n- \`flex-direction\`: row | column\n- \`flex-wrap\`: wrap | nowrap\n- \`justify-content\`: eixo principal\n- \`align-items\`: eixo cruzado\n- \`flex-grow\`: fator de crescimento\n- \`flex-shrink\`: fator de encolhimento\n- \`flex-basis\`: tamanho base\n- \`gap\`: espaçamento entre itens\n\n## Exemplo prático\nCards responsivos sem media queries: \`display: flex; flex-wrap: wrap; gap: 1rem;\` onde cada card tem \`flex: 1 1 250px;\` (grow, shrink, basis).`,
      codigo: ".cards-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.card {\n  flex: 1 1 250px;\n  background: #1e1e2e;\n  padding: 1rem;\n  border-radius: 8px;\n}",
      desafio: "Implemente uma barra de navegação com logo à esquerda, links centralizados e botão à direita. No mobile, os links devem empilhar (flex-wrap: wrap) e o botão ficar abaixo. Use apenas Flexbox."
    },
    {
      slug: "css-grid-poderoso",
      titulo: "CSS Grid: Layouts Bidimensionais Sem Segredos",
      descricao: "Estruturas complexas como dashboards.",
      conteudo: `## Propriedades\n- \`grid-template-columns\`: define colunas (px, fr, %, auto)\n- \`grid-template-rows\`: define linhas\n- \`grid-template-areas\`: nomeia áreas\n- \`grid-auto-flow\`: fluxo automático\n- \`minmax()\`, \`repeat()\`, \`auto-fill\`, \`auto-fit\`\n\n## Exemplo de dashboard\n\`\`\`css\n.dashboard {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  gap: 1rem;\n}\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }\n\`\`\``,
      codigo: ".galeria {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.galeria img {\n  width: 100%;\n  height: auto;\n}",
      desafio: "Construa uma galeria de imagens que se adapta ao viewport: número de colunas varia entre 2 e 6. Use `auto-fit` e `minmax(150px, 1fr)`. Adicione uma imagem de destaque que ocupe duas colunas em alguns breakpoints com `grid-column: span 2`."
    }
  ],

  // Preservando os dados antigos (se houver)
  fundamentos: [
    { slug: "introducao-html", titulo: "Introdução ao HTML", descricao: "Estrutura básica.", conteudo: "HTML é a espinha dorsal.", codigo: "<h1>Olá</h1>", desafio: "Crie uma página." }
  ],
  javascript: [
    { slug: "closures", titulo: "Closures", descricao: "Escopo léxico.", conteudo: "Closure é...", codigo: "function outer() { let x = 10; return function inner() { return x; }; }", desafio: "Crie um contador." }
  ],
  react: [
    { slug: "componentes", titulo: "Componentes React", descricao: "Funcionais.", conteudo: "React baseado em componentes.", codigo: "function App() { return <h1>Oi</h1>; }", desafio: "Crie um componente." }
  ]
};
