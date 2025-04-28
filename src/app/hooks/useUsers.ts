import { useEffect, useState } from "react";
import axios from "axios";
import { IUser, UsersResponse } from "../interfaces/User";

export function useUsers() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<UsersResponse>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`
        );
        setUsers(response.data.users);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return { users, loading, error };
}
