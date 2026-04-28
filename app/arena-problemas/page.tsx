import { ArenaProblemas } from "@/components/arena-problemas";

export default function ArenaProblemasPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🧩 Arena de Problemas</h1>
      <p className="text-ice-muted mb-8">
        Resolva desafios de lógica, debugging e código. Cada acerto conta pontos para sua evolução.
      </p>
      <ArenaProblemas />
    </div>
  );
}
