"use client";
import { createContext, useContext, useState } from "react";
const ImersaoContext = createContext({ imersao: false, toggle: () => {} });
export function ImersaoProvider({ children }: { children: React.ReactNode }) {
  const [imersao, setImersao] = useState(false);
  const toggle = () => setImersao(v => !v);
  return (
    <ImersaoContext.Provider value={{ imersao, toggle }}>
      {children}
      {imersao && <div className="fixed inset-0 bg-black z-50 flex items-center justify-center"><button onClick={toggle} className="bg-eletric/20 px-4 py-2 rounded">Sair</button></div>}
    </ImersaoContext.Provider>
  );
}
export const useImersao = () => useContext(ImersaoContext);
