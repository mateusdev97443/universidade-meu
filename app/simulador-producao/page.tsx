import { SimuladorProducao } from "@/components/simulador-producao";
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold">🚀 Simulador de Produção</h1>
      <p className="text-ice-muted mb-6">Pratique code reviews.</p>
      <SimuladorProducao />
    </div>
  );
}
