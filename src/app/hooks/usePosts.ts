import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IPosts } from "../interfaces/Posts";

export function useUserPosts(userId: string) {
  return useQuery<IPosts[]>({
    queryKey: ["users", userId, "posts"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}/posts`
      );
      return response.data.posts;
    },
    enabled: !!userId,
  });
}
