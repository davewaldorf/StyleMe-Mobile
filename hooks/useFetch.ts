import { useState, useEffect } from "react";

interface RequestOptions {
  method: string;
  headers?: Record<string, string>;
  body?: any;
}

interface FetchResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

const BASE_URL = 'https://style-me-server.vercel.app';

const useFetch = <T>(
  endpoint: string,
  method: string,
  body: any = null
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const options: RequestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, options);
      const responseData = await response.json();

      setData(responseData);
      setIsLoading(false);
    } catch (error) {
      setError(error as Error);
      console.error(error);
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

export default useFetch;
