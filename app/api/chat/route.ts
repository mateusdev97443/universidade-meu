import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const userMessage = messages[messages.length - 1].content;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ reply: "❌ Chave do Gemini não configurada. Adicione GEMINI_API_KEY nas variáveis de ambiente." });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: userMessage }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          },
          systemInstruction: {
            parts: [{ text: "Você é o Jarvis, assistente de front-end da NEXUS. Seja didático, direto e friendly. Responda em português." }]
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Desculpe, não consegui gerar uma resposta.";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ reply: "⚠️ Erro ao chamar o Gemini. Tente novamente mais tarde." });
  }
}
