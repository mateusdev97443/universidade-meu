import { SecondBrain } from "@/components/second-brain";

export default function SecondBrainPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🧠 Second Brain – Mapa do Conhecimento</h1>
      <p className="text-ice-muted mb-6">
        Visualize como os conceitos se conectam. Clique e arraste para explorar.
      </p>
      <SecondBrain />
    </div>
  );
}
