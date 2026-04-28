"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-obsidian">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,229,255,0.05),transparent_50%)]" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-eletric font-mono text-sm tracking-wider border border-eletric/30 rounded-full px-4 py-1 mb-6 inline-block">
            NEXUS FRONT-END
          </span>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-ice via-eletric to-purple bg-clip-text text-transparent">
            Torne-se Mestre
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 text-ice">
            em Front-End
          </h2>
          <p className="text-ice-muted text-lg md:text-xl max-w-2xl mx-auto mt-6">
            Uma universidade digital imersiva que transforma iniciantes em arquitetos de elite.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link
              href="/painel"
              className="bg-eletric text-obsidian px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_20px_#00E5FF] transition"
            >
              Iniciar Jornada
            </Link>
            <Link
              href="/jornada"
              className="border border-eletric text-eletric px-8 py-3 rounded-full font-semibold hover:bg-eletric/10"
            >
              Ver Mapa
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 bg-obsidian-card/50 backdrop-blur-sm border border-border rounded-xl p-4 max-w-2xl w-full text-left font-mono text-sm"
        >
          <div className="flex gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-ice-muted">
            <code>{`> const dev = new Developer("Mateus");
> dev.enroll("NEXUS");
> await dev.becomeMaster();
> // Ready for elite career`}</code>
          </pre>
        </motion.div>
      </div>
    </div>
  );
}
