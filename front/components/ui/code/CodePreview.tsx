import { rawFile } from "@/lib/services/gitlab/file";

export default async function CodePreview({ path }: { path: string }) {
    const data = await rawFile(path);

  return <pre>{data}</pre>;
}
