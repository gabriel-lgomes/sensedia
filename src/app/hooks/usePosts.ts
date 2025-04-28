import { useEffect, useState } from "react";
import axios from "axios";
import { PostsResponse } from "../interfaces/Posts";

export function usePosts(userId: string) {
  const [posts, setPosts] = useState(0);
  const [postsError, setpostsError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get<PostsResponse>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}/posts`
        );
        const postsCount = response.data.posts?.length ?? 0;
        setPosts(postsCount);
      } catch (err) {
        setpostsError(err as Error);
      }
    }

    fetchPosts();
  }, [userId]);

  return { posts, postsError };
}
