export function SecondBrain() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Performance", "Design Systems", "Entrevistas"];
  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-6 h-96 overflow-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="bg-obsidian border border-eletric/30 rounded-lg p-3 text-center hover:border-eletric transition">
            <span className="text-ice">{skill}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-ice-muted text-sm">
        Conhecimentos conectados – visualize suas trilhas de evolução.
      </div>
    </div>
  );
}
