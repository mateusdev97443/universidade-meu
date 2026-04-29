import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1].content;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error('GEMINI_API_KEY não definida');
      return NextResponse.json({ reply: "Chave não configurada." });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 500 }
        })
      }
    );

    const data = await response.json();
    if (!response.ok) {
      console.error('Gemini error:', response.status, data);
      return NextResponse.json({ reply: `Erro ${response.status}: ${data.error?.message || 'desconhecido'}` });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sem resposta.";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error('Exception:', err);
    return NextResponse.json({ reply: "Erro interno. Veja logs." });
  }
}
