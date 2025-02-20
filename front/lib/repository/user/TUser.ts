export type TUser = {
  email: string;
  password: string;
  name: string;
  surname: string;
  score: number;
  repositories?: TUserRepositories[];
};

export type TUserRepositories = {
  id: string;
  since: Date;
  score: number;
  role: ERole[];
};
