export const aulas = {
  fundamentos: [
    { slug: "introducao-html", titulo: "Introdução ao HTML", descricao: "Estrutura básica, tags principais, semântica.", conteudo: "HTML é a espinha dorsal da web. Aprenda as tags essenciais...", codigo: "<h1>Olá, mundo!</h1>", desafio: "Crie uma página com título, parágrafo e imagem." },
    { slug: "css-basico", titulo: "CSS Básico", descricao: "Seletores, cores, box model.", conteudo: "CSS define a aparência...", codigo: "h1 { color: blue; }", desafio: "Mude a cor de fundo de um elemento." },
    { slug: "javascript-primeiros-passos", titulo: "JavaScript: primeiros passos", descricao: "Variáveis, tipos, funções simples.", conteudo: "JS traz interatividade...", codigo: "let nome = 'João'; console.log(nome);", desafio: "Crie uma função que soma dois números." }
  ],
  javascript: [
    { slug: "closures", titulo: "Closures", descricao: "Entenda o conceito de closure.", conteudo: "Closure é a combinação de uma função com seu escopo léxico...", codigo: "function outer() { let x = 10; return function inner() { console.log(x); } }", desafio: "Crie um contador usando closure." },
    { slug: "promises", titulo: "Promises e Async/Await", descricao: "Lidando com operações assíncronas.", conteudo: "Promises resolvem o callback hell...", codigo: "fetch('url').then(res => res.json())", desafio: "Faça uma requisição POST simulada." }
  ],
  react: [
    { slug: "componentes", titulo: "Componentes React", descricao: "Criando componentes funcionais.", conteudo: "React é baseado em componentes...", codigo: "function MeuComponente() { return <h1>Olá</h1>; }", desafio: "Crie um componente que recebe props e exibe uma saudação." },
    { slug: "estado", titulo: "Gerenciamento de Estado", descricao: "useState, eventos.", conteudo: "Estado permite dados dinâmicos...", codigo: "const [count, setCount] = useState(0);", desafio: "Crie um contador com botões." }
  ]
};
