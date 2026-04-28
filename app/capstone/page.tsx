import { Capstone } from "@/components/capstone";

export default function CapstonePage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🎓 Projeto Final – Capstone</h1>
      <p className="text-ice-muted mb-8">
        Seu rito de passagem para provar maestria e conquistar o título de Arquiteto Front-End.
      </p>
      <Capstone />
    </div>
  );
}
