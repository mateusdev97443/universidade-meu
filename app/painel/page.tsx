import { Jarvis } from "@/components/jarvis";
import { MissaoDoDia } from "@/components/missao-do-dia";
import { Evolucao } from "@/components/evolucao";
import { PontosParaReforcar } from "@/components/pontos-reforcar";
import { RecomendacaoMestres } from "@/components/recomendacao-mestres";

export default function PainelPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">Painel do Aluno</h1>
      <p className="text-ice-muted mb-8">Seu centro de comando diário</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coluna principal (esquerda) */}
        <div className="lg:col-span-2 space-y-6">
          <Jarvis />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Evolucao />
            <MissaoDoDia />
          </div>
        </div>
        {/* Coluna direita */}
        <div className="space-y-6">
          <PontosParaReforcar />
          <RecomendacaoMestres />
        </div>
      </div>
    </div>
  );
}
