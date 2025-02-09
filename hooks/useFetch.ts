import { useEffect, useState } from "react";

export const useFetch = (endpoint: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
      setData(data);
      setIsLoading(false);
    } catch {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};
