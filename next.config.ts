import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      // Adicione aqui aliases se necessário no futuro
    },
  },
  // Desabilita a telemetria se desejar
  // typescript: { ignoreBuildErrors: false },
  // eslint: { ignoreDuringBuilds: false },
};

export default nextConfig;
