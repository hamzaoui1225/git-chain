"use client";

import { FileText } from "lucide-react";
import { useContext } from "react";

import { TTree } from "@/components/ui/code/TTree";
import { FileContext } from "@/components/ui/code/FileContext";

export default function FileItem({ file }: { file: TTree }) {
  const { setData } = useContext(FileContext);

  const selectFile = () => {
    setData(file.path);
  };

  return (<div className="flex gap-1 text-lg font-bold" onClick={selectFile}>
      <FileText className="text-white" />
      <span>{file.name}</span>
    </div>
  );
}
