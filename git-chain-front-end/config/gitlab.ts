const GITLAB_IP = "192.168.1.26:8080";
const GITLAB_BASEURL = `http://${GITLAB_IP}/api/v4`;
const GITLAB_TOKEN = "glpat-72TBjMwYKHJ3_ULvsygs";
const GITLAB_CLIENT_ID =
  "13f5b9a8c78a49922577b4682e8338577f6cea5ec23b7bd7ba614949cdfcc65e";
const GITLAB_CLIENT_SECRET =
  "gloas-a4aff9ff7a75c2b51f1e4a10d645b3e250f877d4e9a6d092daac4fe2f9ce0837";

const GITLAB_ENDPOINT_USERS = GITLAB_BASEURL + "/user";
const GITLAB_ENDPOINT_PROJECTS = GITLAB_BASEURL + "/projects";
const GITLAB_ENDPOINT_AUTH = `http://${GITLAB_IP}/oauth/token`;


const GITLAB_HEADER: HeadersInit = {
  Authorization: "Bearer " + GITLAB_TOKEN,
};

const GITLAB_HEADER_JSON: HeadersInit = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + GITLAB_TOKEN,
};

export {
  GITLAB_BASEURL,
  GITLAB_HEADER,
  GITLAB_CLIENT_ID,
  GITLAB_CLIENT_SECRET,
  GITLAB_ENDPOINT_AUTH,
  GITLAB_HEADER_JSON,
  GITLAB_ENDPOINT_USERS,
  GITLAB_ENDPOINT_PROJECTS,
};
