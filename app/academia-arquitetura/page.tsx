import { AcademiaArquitetura } from "@/components/academia-arquitetura";
import { RecursosArquitetura } from "@/components/recursos-arquitetura";

export default function AcademiaArquiteturaPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🏛️ Academia de Arquitetura</h1>
      <p className="text-ice-muted mb-8">
        Domine os conceitos que separam um dev comum de um arquiteto front-end de elite.
      </p>
      <AcademiaArquitetura />
      <RecursosArquitetura />
    </div>
  );
}
