"use client";
import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
export function PaletteCommand() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); setOpen(o => !o); }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const run = (path: string) => { router.push(path); setOpen(false); };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <Command className="w-[600px] bg-obsidian border border-eletric/30 rounded-xl">
        <Command.Input placeholder="🔍 Buscar..." className="w-full bg-transparent px-5 py-4 text-ice outline-none border-b border-eletric/20" />
        <Command.List className="py-2">
          <Command.Item onSelect={() => run("/faculdades/react")} className="px-5 py-2 hover:bg-eletric/10 cursor-pointer">🧪 Abrir Faculdade React</Command.Item>
          <Command.Item onSelect={() => run("/missoes")} className="px-5 py-2 hover:bg-eletric/10 cursor-pointer">🎯 Iniciar missão</Command.Item>
          <Command.Item onSelect={() => run("/mestres/frontend")} className="px-5 py-2 hover:bg-eletric/10 cursor-pointer">🧙 Falar com Mestre</Command.Item>
        </Command.List>
      </Command>
    </div>
  );
}
