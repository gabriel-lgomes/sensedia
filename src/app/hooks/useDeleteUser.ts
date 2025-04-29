import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId: string) => {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
