import { useState } from "react";
import axios from "axios";

export function useDeleteUser() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteUser = async (userId: string) => {
    console.log(userId);

    setIsDeleting(true);
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}`
      );
      return true;
    } catch (err) {
      setError(err as Error);
      return false;
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteUser, isDeleting, error };
}
