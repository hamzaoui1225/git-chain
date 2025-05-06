import { Dispatch, SetStateAction, useEffect, useState } from "react";

import FolderItem from "@/components/ui/code/FolderItem";
import FileItem from "@/components/ui/code/FileItem";
import { TTree } from "@/components/ui/code/TTree";
import { folder } from "@/lib/services/gitlab/repository";

export default function RenderTree({
  path, projectId, setFile
}: {
  setFile: Dispatch<SetStateAction<string>>;
  projectId: string;
  path: string;
}) {
  const [data, setData] = useState<TTree[]>();

  useEffect(() => {
      folder(path, projectId).then((data) => setData(data));
  }, [path]);

  if (!data) return <></>;

  const render_file_tree = () => {
    if (data.error) return <></>;
    return data?.map((item, index) => {
      if (item.type == "tree")
        return <FolderItem setFile={setFile} projectId={projectId} key={index} folder={item} />;
      else return <FileItem setFile={setFile} key={index} file={item} />;
    });
  };

  return <>{render_file_tree()}</>;
}

