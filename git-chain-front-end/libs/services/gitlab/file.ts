import { blockChainBaseUrl } from "../blockchain/block-config";
import { gitlab_api_endpoint } from "../gitlab-config";

const workingBranch = "?ref=main";
const gitlabFileURL = gitlab_api_endpoint + "/projects/1/repository/files/";
const gitlabFolderURL = gitlab_api_endpoint + "/projects/1/repository/tree?path=";
const gitlabRootFolderURL = gitlab_api_endpoint + "/projects/1/repository/tree";


function decodeBase64(base64: string): string {
  return Buffer.from(base64, "base64").toString("utf8");
}

export async function getFileRawData(filePath: string) {
  const decrypt = await fetch(
    `${gitlabFileURL}${filePath.replaceAll("/","%2F")}${workingBranch}`,
  ).then((res) => res.json());

  return decodeBase64(decrypt.content);
}

export async function getFolderContent(filePath: string){
  return await fetch(`${gitlabFolderURL}${filePath}`).then((res) => res.json());
}

export async function getRootFolder() {
  return await fetch(`${gitlabRootFolderURL}`).then((res) => res.json());
}

const testRaw = blockChainBaseUrl + "/root/deepseek/-/raw/main/";

export const rawFile = async (filePath: string) =>
  await fetch(`${testRaw}${filePath}`).then((res) => res.text());
