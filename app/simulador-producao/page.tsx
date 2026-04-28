import { SimuladorProducao } from "@/components/simulador-producao";

export default function SimuladorProducaoPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🚀 Simulador de Produção</h1>
      <p className="text-ice-muted mb-8">
        Pratique code reviews, identifique problemas e sugira melhorias como em um time real.
      </p>
      <SimuladorProducao />
    </div>
  );
}
