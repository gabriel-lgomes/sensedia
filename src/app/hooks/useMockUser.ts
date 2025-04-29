import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useMockUser() {
  return useQuery({
    queryKey: ["mock-user"],
    queryFn: async () => {
      const res = await axios.get("/api/users");
      return res.data;
    },
  });
}
