import { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../interfaces/User";

export function useNewUser() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const createUser = async (userData: Omit<IUser, "id">) => {
    try {
      setLoading(true);
      const response = await axios.post<IUser>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/create`,
        userData
      );
      return response.data;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return {
    createUser,
    loading,
    error,
  };
}
