import { SimuladorEntrevista } from "@/components/simulador-entrevista";
import { LiveCodingSimulado } from "@/components/live-coding-simulado";

export default function EntrevistasPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🎤 Arena de Entrevistas</h1>
      <p className="text-ice-muted mb-8">
        Teste seus conhecimentos com perguntas reais e pratique live coding.
      </p>
      <SimuladorEntrevista />
      <LiveCodingSimulado />
    </div>
  );
}
