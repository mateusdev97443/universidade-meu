"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { aulas } from "@/data/aulas";

export default function AulaPage({ params }: { params: { faculdade: string; slug: string } }) {
  const { faculdade, slug } = params;
  const faculdadeData = aulas[faculdade as keyof typeof aulas];
  if (!faculdadeData) return notFound();
  const aula = faculdadeData.find(a => a.slug === slug);
  if (!aula) return notFound();

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [speechSupported, setSpeechSupported] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.speechSynthesis) setSpeechSupported(false);
    return () => { if (typeof window !== "undefined" && window.speechSynthesis) window.speechSynthesis.cancel(); };
  }, []);

  const cleanText = (text: string) => text.replace(/[#*`_-]/g, '').replace(/\n+/g, '. ').trim();
  const textoParaNarrar = `${aula.titulo}. ${cleanText(aula.conteudo)}`;

  const iniciarNarracao = () => {
    if (!window.speechSynthesis) return;
    if (utteranceRef.current && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsSpeaking(true);
      return;
    }
    if (utteranceRef.current) window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textoParaNarrar);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => { setIsSpeaking(false); setIsPaused(false); utteranceRef.current = null; };
    utterance.onerror = () => { setIsSpeaking(false); setIsPaused(false); utteranceRef.current = null; };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pausarNarracao = () => { if (isSpeaking && !isPaused && window.speechSynthesis) { window.speechSynthesis.pause(); setIsPaused(true); } };
  const pararNarracao = () => { if (utteranceRef.current && window.speechSynthesis) { window.speechSynthesis.cancel(); setIsSpeaking(false); setIsPaused(false); utteranceRef.current = null; } };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-start">
        <h1 className="text-4xl font-bold mb-2">{aula.titulo}</h1>
        {speechSupported && (
          <div className="flex gap-2">
            {!isSpeaking ? (
              <button onClick={iniciarNarracao} className="bg-eletric text-obsidian px-3 py-1 rounded-full">🔊 Narrar Aula</button>
            ) : (
              <>
                {!isPaused ? <button onClick={pausarNarracao} className="bg-yellow-500 px-3 py-1 rounded-full">⏸ Pausar</button> : <button onClick={iniciarNarracao} className="bg-green-500 px-3 py-1 rounded-full">▶ Retomar</button>}
                <button onClick={pararNarracao} className="bg-red-500 text-white px-3 py-1 rounded-full">⏹ Parar</button>
              </>
            )}
          </div>
        )}
      </div>
      {!speechSupported && <div className="text-yellow-400">Seu navegador não suporta narração.</div>}
      <p className="text-ice-muted mb-6">{aula.descricao}</p>
      <div className="bg-obsidian-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-3">📖 Conteúdo</h2>
        <div className="text-ice-muted whitespace-pre-line">{aula.conteudo}</div>
      </div>
      <div className="bg-black/40 border border-border rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-3">💻 Código exemplo</h2>
        <pre className="bg-obsidian p-3 rounded overflow-x-auto"><code>{aula.codigo}</code></pre>
      </div>
      <div className="bg-eletric/10 border border-eletric/30 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-3">🏆 Desafio</h2>
        <p className="text-ice-muted">{aula.desafio}</p>
        <button className="mt-4 bg-eletric text-obsidian px-4 py-2 rounded-full">Marcar como concluído (simular)</button>
      </div>
      <div className="mt-8"><Link href={`/faculdades/${faculdade}`} className="text-eletric">← Voltar para faculdade</Link></div>
    </div>
  );
}
