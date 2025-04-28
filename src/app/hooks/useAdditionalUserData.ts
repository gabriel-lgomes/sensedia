import { useEffect, useState } from "react";

interface AdditionalUserData {
  city: string;
  weekdays: string;
  loading: boolean;
  error: Error | null;
}

export function useAdditionalUserData(userId: string): AdditionalUserData {
  const [data, setData] = useState<
    Omit<AdditionalUserData, "loading" | "error">
  >({
    city: "",
    weekdays: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/users/${userId}/additional-data`);
        const jsonData = await response.json();
        setData({
          city: jsonData.city,
          weekdays: jsonData.weekdays,
        });
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  return { ...data, loading, error };
}
