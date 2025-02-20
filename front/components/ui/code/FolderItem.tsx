"use client";

import { FolderIcon } from "lucide-react";
import {Dispatch, SetStateAction, useState} from "react";

import { TTree } from "@/components/ui/code/TTree";
import RenderTree from "@/components/ui/code/RenderTree";

export default function FolderItem({
  folder
}: {
  folder: TTree;
}) {
  const [isOpen, setOpen] = useState(false);

  const toggle_folder = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex gap-1 text-lg font-bold" onClick={toggle_folder}>
        <FolderIcon className="text-white" />
        <span>{folder.name}</span>
      </div>
      {isOpen && (
        <div className="pl-4">
          <RenderTree path={folder.path} />
        </div>
      )}
    </div>
  );
}
