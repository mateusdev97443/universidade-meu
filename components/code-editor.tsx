"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export function CodeEditor() {
  const [code, setCode] = useState(`<!-- Escreva seu HTML/CSS/JS aqui -->
<div class="container">
  <h1>Olá, NEXUS!</h1>
  <p>Este é seu laboratório de código.</p>
  <button onclick="alert('Funcionou!')">Clique</button>
</div>

<style>
  .container {
    text-align: center;
    font-family: system-ui;
    margin-top: 2rem;
  }
  button {
    background: #00E5FF;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
  }
</style>

<script>
  console.log("Executando no preview");
</script>`);
  const [iframeKey, setIframeKey] = useState(0);

  const runCode = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[600px]">
      {/* Editor */}
      <div className="flex-1 border border-border rounded-lg overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="html"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
          }}
        />
      </div>
      {/* Preview */}
      <div className="flex-1 border border-border rounded-lg bg-white">
        <div className="bg-obsidian-card p-2 border-b border-border flex justify-between">
          <span className="text-sm text-ice-muted">⚡ Resultado ao vivo</span>
          <button
            onClick={runCode}
            className="bg-eletric text-obsidian text-xs px-3 py-1 rounded-full"
          >
            ▶ Executar
          </button>
        </div>
        <iframe
          key={iframeKey}
          title="preview"
          srcDoc={code}
          className="w-full h-[calc(100%-40px)] bg-white rounded-b-lg"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    </div>
  );
}
