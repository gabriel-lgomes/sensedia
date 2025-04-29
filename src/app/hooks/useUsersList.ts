import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IUser } from "../interfaces/User";

export function useUsersList() {
  // Buscar todos os usuários
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<IUser[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`
      );
      return response.data.users;
    },
  });

  return { users, isLoading, error };
}
