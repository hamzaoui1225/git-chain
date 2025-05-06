export const headers: HeadersInit = {
  Authorization: "Bearer glpat-72TBjMwYKHJ3_ULvsygs",
};

export const jsonHeaders: HeadersInit = {
  "Content-Type": "application/json",
  Authorization: "Bearer glpat-72TBjMwYKHJ3_ULvsygs",
};
// export const headers: HeadersInit = {
//   Authorization: "Bearer " + process.env.GITHUB_TOKEN,
// };

export const gitlab_base_url = process.env.GITHUB_URL;
// export const gitlab_api_endpoint = process.env.GITHUB_URL + "/api/v4";
export const gitlab_api_endpoint = "http://192.168.1.26:8080/api/v4";
