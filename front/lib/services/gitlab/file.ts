
const workingBranch = "?ref=main";
const gitlabFileURL =
  "http://localhost:8000/api/v4/projects/1/repository/files/";

const gitlabFolderURL =
  "http://localhost:8000/api/v4/projects/1/repository/tree?path=";
const gitlabRootFolderURL =
  "http://localhost:8000/api/v4/projects/1/repository/tree";

const headerConfig = {
  Authorization: "Basic " + process.env.GITLAB_TOKEN,
};

function decodeBase64(base64: string): string {
  return Buffer.from(base64, "base64").toString("utf8");
}

export async function getFileRawData(filePath: string) {
  const decrypt = await fetch(
    `${gitlabFileURL}${filePath}${workingBranch}`,
  ).then((res) => res.json());

  return decodeBase64(decrypt.content);
}

export async function getFolderContent(filePath: string){
  return await fetch(`${gitlabFolderURL}${filePath}`).then((res) => res.json());
}

export async function getRootFolder() {
  return await fetch(`${gitlabRootFolderURL}`).then((res) => res.json());
}

const testRaw = "http://127.0.0.1:8000/root/deepseek/-/raw/main/";

export const rawFile = async (filePath: string) =>
  await fetch(`${testRaw}${filePath}`).then((res) => res.text());
