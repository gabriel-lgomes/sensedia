export interface IAlbum {
  id: "string";
  title: "string";
  description: "string";
  created_at: "string";
  updated_at: "string";
}

export interface AlbumsResponse {
  albums: IAlbum[];
}
