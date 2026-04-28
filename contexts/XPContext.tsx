"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface XPContextType {
  xp: number;
  level: number;
  addXP: (amount: number) => void;
}

const XPContext = createContext<XPContextType | undefined>(undefined);

export function XPProvider({ children }: { children: React.ReactNode }) {
  const [xp, setXP] = useState(0);
  const level = Math.floor(xp / 100) + 1;

  useEffect(() => {
    const saved = localStorage.getItem("nexus_xp");
    if (saved) setXP(parseInt(saved));
  }, []);

  const addXP = (amount: number) => {
    const newXP = xp + amount;
    setXP(newXP);
    localStorage.setItem("nexus_xp", newXP.toString());
  };

  return (
    <XPContext.Provider value={{ xp, level, addXP }}>
      {children}
    </XPContext.Provider>
  );
}

export function useXP() {
  const context = useContext(XPContext);
  if (!context) throw new Error("useXP must be used within XPProvider");
  return context;
}
