"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type FileContextType = {
  setData: Dispatch<SetStateAction<string>>;
  data: string;
};

export const FileContext = createContext<FileContextType>({
  data: "",
  setData: () => {},
});

export function CFile({ children }: { children: ReactNode }) {
  const [data, setData] = useState("");

  return (
    <FileContext.Provider value={{ data, setData }}>
      {children}
    </FileContext.Provider>
  );
}
