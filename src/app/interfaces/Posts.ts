export interface IPosts {
  id: "string";
  user_id: "string";
  content: "string";
  created_at: "string";
  updated_at: "string";
}

export interface PostsResponse {
  posts: IPosts[];
}
