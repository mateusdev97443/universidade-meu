import { CapstoneInterativo } from "@/components/capstone-interativo";

export default function CapstonePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🎓 Projeto Final – Capstone NEXUS</h1>
      <p className="text-ice-muted mb-6">
        Marque os itens que você já entregou. Ao final, receba sua nota e feedback.
      </p>
      <CapstoneInterativo />
    </div>
  );
}
