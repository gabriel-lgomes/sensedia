export interface IUser {
  email: string;
  id: string;
  name: string;
  password: string;
}
export interface UsersResponse {
  users: IUser[];
}
