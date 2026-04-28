import Link from "next/link";
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian/90 to-eletric/10" />
      <div className="relative max-w-6xl mx-auto px-4 py-32 text-center">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-ice to-eletric bg-clip-text text-transparent">Torne-se Mestre<br />em Front-End</h1>
        <p className="text-xl text-ice/70 mt-6">Uma universidade pessoal de maestria para formar você como desenvolvedor de elite.</p>
        <div className="flex gap-4 justify-center mt-10">
          <Link href="/universidade" className="bg-eletric text-obsidian px-8 py-3 rounded-md font-semibold">Entrar na Universidade</Link>
          <Link href="/trilhas" className="border border-eletric text-eletric px-8 py-3 rounded-md">Começar Agora</Link>
          <Link href="/mestres" className="border border-ice/30 text-ice px-8 py-3 rounded-md">Conhecer os Mestres</Link>
        </div>
      </div>
    </div>
  );
}
