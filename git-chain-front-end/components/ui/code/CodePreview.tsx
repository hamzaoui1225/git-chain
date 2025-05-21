"use client"

import { getFileRawData } from "@/libs/services/gitlab/file";
import { useEffect, useState } from "react";

export default function CodePreview({ filePath } : { filePath : string }) {

  const [ fileData , setFileData ] = useState<string>();

  useEffect(() => {
    getFileRawData(filePath).then((data) => {
      setFileData(data);
    });
  }, [filePath]);

  if (!fileData) return <></>;

  return (<div className="space-y-2">
    <h2 className="font-thin">/{filePath}</h2>
    <pre className="overflow-scroll h-[28rem]">{fileData}</pre>
  </div>); 
}
