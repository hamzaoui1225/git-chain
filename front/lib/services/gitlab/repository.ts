const url = "http://127.0.0.1:8000/api/v4/projects/";

const headers = {
  Authorization: "Bearer glpat-TRVtGcmsaDPxqJvDfEEU",
};

export async function fetchRepositoryById(id: string) {
  return await fetch(url + id).then((res) => res.json());
}

export async function getRepositoryMembers(id: string) {
  return await fetch(url + id + "/members", {
    headers: {
      Authorization: "Bearer glpat-TRVtGcmsaDPxqJvDfEEU",
    },
  }).then((res) => res.json());
}

export async function getRepositoryCommits(id: string) {
  return await fetch(url + id + "/repository/commits", {
    headers: headers,
  }).then((res) => res.json());
}
