export function RecursosArquitetura() {
  const recursos = [
    { nome: "Design Systems Book", link: "https://www.designsystems.com/" },
    { nome: "Web.dev Performance", link: "https://web.dev/performance/" },
    { nome: "Patterns.dev", link: "https://www.patterns.dev/" },
    { nome: "Frontend Architecture Workshop", link: "#" },
  ];
  return (
    <div className="mt-10 bg-obsidian-card border border-border rounded-xl p-5">
      <h3 className="text-xl font-semibold mb-3">📚 Recursos Recomendados</h3>
      <ul className="space-y-2">
        {recursos.map((r, i) => (
          <li key={i}>
            <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-eletric hover:underline">
              {r.nome}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
