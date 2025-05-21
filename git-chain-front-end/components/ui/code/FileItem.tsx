import { FileText } from "lucide-react";
import { TTree } from "@/components/ui/code/TTree";
import { Dispatch, SetStateAction } from "react";

export default function FileItem({ file, setFile }: { setFile: Dispatch<SetStateAction<string>>, file: TTree }) {

  const selectFile = () => {
    setFile(file.path);
  };

  return (<div className="flex gap-1 text-lg font-bold" onClick={selectFile}>
      <FileText className="text-white" />
      <span>{file.name}</span>
    </div>
  );
}
