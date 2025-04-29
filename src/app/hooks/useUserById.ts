import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IUser } from "../interfaces/User";

export function useUserById(id: string) {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<IUser>({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`
      );
      return response.data.user;
    },
    enabled: !!id,
  });

  return { user, isLoading, error };
}
