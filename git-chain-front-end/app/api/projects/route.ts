import { GITLAB_ENDPOINT_PROJECTS, GITLAB_HEADER } from "@/config/gitlab";

export async function GET() {
  const data = await fetch(GITLAB_ENDPOINT_PROJECTS, {
    headers: GITLAB_HEADER,
  }).then((res) => res.json());

  return Response.json(data);
}
