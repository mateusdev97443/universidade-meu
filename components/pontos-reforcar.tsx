export function PontosParaReforcar() {
  const weaknesses = [
    "Closures em JavaScript",
    "Flexbox vs Grid",
    "Estado no React",
  ];
  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-5">
      <h3 className="text-xl font-semibold mb-2">⚠️ Pontos para reforçar</h3>
      <ul className="list-disc list-inside space-y-1 text-ice-muted">
        {weaknesses.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
