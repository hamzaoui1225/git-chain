import { gitlab_api_endpoint, headers, jsonHeaders } from "@/libs/services/gitlab-config";

const project_url = gitlab_api_endpoint + "/projects/";

const privileges = {
  'guest': 10, // 0.2
  'reporter': 20, // 0.4
  'developer': 30, // 0.5
  'maintainer': 40, // 0.6
  'owner': 50 // 0.9
}

export function getPrivilegeFromScore(score: number) {
  if (score >= 0.9) return 50;
  if (score >= 0.6) return 40;
  if (score >= 0.5) return 30;
  if (score >= 0.4) return 20;
  return 10;
}

export async function addUserToRepository(userId: number, projectId: string, score: number) {
  return await fetch(project_url + projectId + "/members", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({
      "user_id": userId,
      "access_level": getPrivilegeFromScore(score)
    })
  }).then((res) => res.json());
}

export async function deleteUserFromRepository(userId: number, projectId: string) {
  return await fetch(project_url + projectId + "/members/" + userId, {
    method: "DELETE",
    headers: headers,
  }).then((res) => res.json());
}

export async function getAllProjects() {
  return await fetch(project_url, {
    headers: headers,
  }).then((res) => res.json());
}

export async function fetchRepositoryById(id: string) {
  return await fetch(project_url + id, {
    headers: headers,
  }).then((res) => res.json());
}
export async function fetchNameSpaces() {
  return await fetch(project_url + "/namespaces", {
    headers: headers,
  }).then((res) => res.json());
}

export async function getRepositoryMembers(id: string) {
  return await fetch(project_url + id + "/members", {
    headers: headers,
  }).then((res) => res.json());
}

export async function getRepositoryCommits(id: string) {
  return await fetch(project_url + id + "/repository/commits", {
    headers: headers,
  }).then((res) => res.json());
}

export const folder = async (path: string, projectId: string) =>
  await fetch(`${gitlab_api_endpoint}/projects/${projectId}/repository/tree?path=${path}`, {
    headers: headers,
  }
  ).then((res) => res.json());