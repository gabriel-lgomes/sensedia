// hooks/useUserAlbums.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IAlbums } from "../interfaces/Albums";

export function useUserAlbums(userId: string) {
  return useQuery<IAlbums[]>({
    queryKey: ["users", userId, "albums"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}/albums`
      );
      return response.data.albums;
    },
    enabled: !!userId,
  });
}
