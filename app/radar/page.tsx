import { SkillRadar } from "@/components/skill-radar";

export default function RadarPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">Radar de Habilidades</h1>
      <p className="text-ice-muted mb-8">
        Visualize sua evolução e identifique pontos fortes e fracos.
      </p>
      <SkillRadar />
    </div>
  );
}
