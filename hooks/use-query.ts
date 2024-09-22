import { useQuery, UseQueryResult } from "@tanstack/react-query";
import useAxiosAuth from "./use-axios-auth";

const Backend_URL = process?.env?.NEXT_PUBLIC_BACKEND_URL;

export const useFetchData = <T>(
  queryKey: any[],
  url: string,
  enabled: boolean = true,
): UseQueryResult<T> => {
  const axiosAuth = useAxiosAuth();

  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      const response = await axiosAuth.get(`${Backend_URL}/${url}`);
      return response.data;
    },
    enabled,
  });
};
