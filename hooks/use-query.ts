import { useQuery, UseQueryResult } from "@tanstack/react-query";
import useAxiosAuth from "./use-axios-auth";
import { AxiosError } from "axios";
import { error } from "console";

const Backend_URL = process?.env?.NEXT_PUBLIC_BACKEND_URL;

export const useFetchData = <T>(
  queryKey: any[],
  url: string,
  enabled?: boolean,
): UseQueryResult<T> => {
  const axiosAuth = useAxiosAuth();

  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      try {
        const response = await axiosAuth.get(`${Backend_URL}/${url}`);
        return response.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          const network_error = error.code === "ERR_NETWORK"
          const errorToThrow = {
            message: network_error ? error?.message : error.response?.data?.message,
            errors: network_error ? [] : error.response?.data?.errors
          }
          throw new Error(errorToThrow?.message)
        }
        throw error
      }

    },
    enabled: enabled ?? true,

  });
};
