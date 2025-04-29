// hooks/useCreateUser.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IUser } from "../interfaces/User";

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUser: Omit<IUser, "id">) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/create`,
        newUser
      );
      return response.data.user;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
