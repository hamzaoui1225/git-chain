import { useEffect, useState } from "react";

import FolderItem from "@/components/ui/code/FolderItem";
import FileItem from "@/components/ui/code/FileItem";
import { TTree } from "@/components/ui/code/TTree";

export default function RenderTree({
  path
}: {
  path: string;
}) {
  const [data, setData] = useState<TTree[]>();

  useEffect(() => {
    const folder = async () =>
      await fetch(
        `http://localhost:8000/api/v4/projects/1/repository/tree?path=${path}`,
      ).then((res) => res.json());

    folder().then((data) => setData(data));
  }, [path]);

  if (!data) return <></>;

  const render_file_tree = () => {
    return data?.map((item, index) => {
      if (item.type == "tree")
        return <FolderItem key={index} folder={item} />;
      else return <FileItem key={index} file={item} />;
    });
  };

  return <>{render_file_tree()}</>;
}
