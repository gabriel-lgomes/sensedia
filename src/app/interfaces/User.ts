export interface IUser {
  email: string;
  id: string;
  name: string;
  password: string;
  created_at: string;
  updated_at: string;
}
export interface UsersResponse {
  users: IUser[];
}
