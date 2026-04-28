"use client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { skill: "HTML", level: 85 },
  { skill: "CSS", level: 70 },
  { skill: "JavaScript", level: 55 },
  { skill: "React", level: 40 },
  { skill: "TypeScript", level: 30 },
  { skill: "Arquitetura", level: 20 },
];

export function SkillRadar() {
  return (
    <div className="bg-obsidian-card border border-border rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">📡 Skill Radar</h2>
      <p className="text-ice-muted text-sm mb-6">
        Sua proficiência atual em cada área (0-100). Evolua praticando e completando missões.
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#2A2A35" />
          <PolarAngleAxis dataKey="skill" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#9CA3AF" }} />
          <Radar
            name="Mateus"
            dataKey="level"
            stroke="#00E5FF"
            fill="#00E5FF"
            fillOpacity={0.3}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#111118", borderColor: "#2A2A35", color: "#E6EDF3" }}
            itemStyle={{ color: "#E6EDF3" }}
          />
        </RadarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center text-ice-muted text-xs">
        * Os níveis são estimados com base no seu progresso. Conclua missões para aumentar!
      </div>
    </div>
  );
}
