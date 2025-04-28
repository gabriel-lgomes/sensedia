import { useEffect, useState } from "react";
import axios from "axios";
import { AlbumsResponse } from "../interfaces/Albums";

export function useAlbums(userId: string) {
  const [albums, setAlbums] = useState(0);
  const [albumsError, setAlbumsError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await axios.get<AlbumsResponse>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}/albums`
        );
        const albumsCount = response.data.albums?.length ?? 0;
        setAlbums(albumsCount);
      } catch (err) {
        setAlbumsError(err as Error);
        setAlbums(0);
      }
    }

    fetchAlbums();
  }, [userId]);

  return { albums, albumsError };
}
