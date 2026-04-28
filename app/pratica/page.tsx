import { CodeEditor } from "@/components/code-editor";

export default function PraticaPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">🧪 Laboratório de Código</h1>
      <p className="text-ice-muted mb-6">
        Escreva, teste e veja o resultado imediatamente. Pratique HTML, CSS e JavaScript.
      </p>
      <CodeEditor />
      <div className="mt-6 bg-obsidian-card border border-border rounded-xl p-4">
        <h3 className="font-semibold mb-2">💡 Desafio do momento</h3>
        <p className="text-ice-muted text-sm">
          Crie um card com imagem, título e botão. Use flexbox para centralizar.
        </p>
      </div>
    </div>
  );
}
