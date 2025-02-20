
const gitlabBaseUrl = 'http://localhost:8000/api/v4/';

const headerConfig = {
  "Content-Type": "application/json",
  Authorization: "Basic " + process.env.GITLAB_TOKEN,
};

export async function registerGitlabUser(
  email: string,
  password: string,
  username: string,
  name: string,
) {
  return await fetch(`${gitlabBaseUrl}/users`, {
    method: "POST",
    headers: headerConfig,
    body: JSON.stringify({
      email: email,
      password: password,
      username: username,
      name: name,
      skip_confirmation: true,
    }),
  }).then((response: Response) => response.json());
}
