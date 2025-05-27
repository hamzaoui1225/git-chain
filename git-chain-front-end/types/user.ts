export interface TUser {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar_url?: string;
  bot: boolean;
  is_admin: boolean;
}
