import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "./use-axios-auth";



const Backend_URL = process?.env?.NEXT_PUBLIC_BACKEND_URL
export const useFetchData = (
  queryKey: any[],
  url: string,

) => {
  const axiosAuth = useAxiosAuth();
  return useQuery({
    queryKey: queryKey,

    queryFn: async () => {
      const response = await axiosAuth.get(
        `${Backend_URL}/${url}`,
      );
      return response.data;
    },


  });
};



