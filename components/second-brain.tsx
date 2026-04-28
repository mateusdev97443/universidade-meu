"use client";
import dynamic from "next/dynamic";

// Import dinâmico para evitar erros de SSR
const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false });

const nodes = [
  { id: "HTML", group: 1, val: 10 },
  { id: "CSS", group: 1, val: 9 },
  { id: "JS", group: 2, val: 12 },
  { id: "React", group: 2, val: 11 },
  { id: "TypeScript", group: 2, val: 8 },
  { id: "Performance", group: 3, val: 7 },
  { id: "Design Systems", group: 3, val: 6 },
  { id: "Entrevistas", group: 4, val: 5 },
];

const links = [
  { source: "HTML", target: "CSS" },
  { source: "CSS", target: "JS" },
  { source: "JS", target: "React" },
  { source: "React", target: "TypeScript" },
  { source: "React", target: "Performance" },
  { source: "Design Systems", target: "CSS" },
  { source: "Entrevistas", target: "JS" },
  { source: "Entrevistas", target: "React" },
];

export function SecondBrain() {
  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-4 h-[600px]">
      <ForceGraph2D
        graphData={{ nodes, links }}
        nodeLabel="id"
        nodeAutoColorBy="group"
        linkDirectionalParticles={2}
        linkWidth={2}
        nodeCanvasObject={(node, ctx, globalScale) => {
          ctx.fillStyle = node.color || (node.group === 1 ? "#00E5FF" : node.group === 2 ? "#A855F7" : "#10B981");
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = "#E6EDF3";
          ctx.font = `${12/globalScale}px Inter`;
          ctx.fillText(node.id, node.x-15, node.y-10);
        }}
      />
    </div>
  );
}
