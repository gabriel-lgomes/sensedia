export interface IUser {
  created_at: "string";
  email: "string";
  id: "string";
  name: "string";
  updated_at: "string";
}
export interface UsersResponse {
  users: IUser[];
}
