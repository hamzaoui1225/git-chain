export type TRepositories = {
  id: string;
  name: string;
  description: string;
  since: string;
  type: string;
  score: number;
  members: TRepositoriesUser[];
};

export type TRepositoriesUser = {
  email: string;
  since: string;
  score: number;
  role: ERole[];
};
