import { gitlab_api_endpoint, headers } from "@/lib/services/gitlab-config";

const project_url = gitlab_api_endpoint + "/users";

export async function getAllUsers() {
  return await fetch(project_url, {
    headers: headers,
  }).then((res) => res.json());
}

export async function getUserById(id: string) {
    return await fetch(project_url + "/" + id, {
      headers: headers,
    }).then((res) => res.json());
  }
  