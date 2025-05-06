"use client";

import { FileText, FolderIcon } from "lucide-react";
import { useEffect, useState } from "react";

import {
  getFileRawData,
  getFolderContent,
  getRootFolder, rawFile,
} from "@/lib/services/gitlab/file";


export default function CodeExplorer({setFileContent}) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const response = async () => await getRootFolder();

    response().then((data) => {
      setContent(data);
    });
  }, []);

  return <RenderContext setFileContent={setFileContent} route={content} />;
}

function RenderContext({ route, setFileContent }) {
  return (
    <div>
      {route.map((data, index) => {
        if (data.type == "blob") return <File setFileContent={setFileContent} key={index} data={data} />;
        else if (data.type == "tree") return <Folder key={index} data={data} />;
      })}
    </div>
  );
}

function Folder({ data, setFileContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState();

  const folder = async () => {
    setIsOpen(!isOpen);

    return await getFolderContent(data.path).then((content) => {
      setContent(content);
    });
  };

  return (
    <>
      <div className="flex gap-1 text-lg font-bold" onClick={folder}>
        <FolderIcon className="text-white" />
        <span>{data.name}</span>
      </div>
      <div>
        {isOpen && content && (
          <div className="pl-2">
            <RenderContext setFileContent={setFileContent} route={content} />
          </div>
        )}
      </div>
    </>
  );
}

function File({ data, setFileContent }) {
  const file = async () => await rawFile(data.path);

  return (
    <div className="flex gap-1 text-lg font-bold" onClick={async () => {
      setFileContent(await file())
    }}>
      <FileText className="text-white " />
      <span>{data.name}</span>
    </div>
  );
}
