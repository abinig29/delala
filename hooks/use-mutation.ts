import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import useAxiosAuth from "./use-axios-auth";
import { ColorEnums, logTrace } from "@/lib/logger";



type MutationOptions = {
  url: string;
  method: AxiosRequestConfig["method"];
  body?: any;
  headers?: AxiosRequestConfig["headers"];
};



interface UseMutationFuncOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export const useMutationFunc = (
  { onSuccess, onError }: UseMutationFuncOptions = {}
) => {
  const axiosAuth = useAxiosAuth();
  return useMutation({
    mutationFn: async (options: MutationOptions) => {
      const { url, method, body, headers, } = options;
      logTrace("url", url, ColorEnums.BgCyan);
      logTrace("method", method, ColorEnums.BgMagenta);
      const response = await axiosAuth.request({ url: `/${url}`, method, headers, data: body });
      return response.data;

    },
    onSuccess: (data, variables, context) => { if (onSuccess) onSuccess(data) },
    onError: (error, variables, context) => {

      if (error instanceof AxiosError) {
        const network_error = error.code === "ERR_NETWORK"
        const errortoThrow = {
          message: network_error ? error?.message : error.response?.data?.message,
          errorCode: network_error ? 6666 : error.response?.data?.errorCode,
          errors: network_error ? [] : error.response?.data?.errors
        }
        if (onError) onError(errortoThrow);
      }
    }
  })
}





export default useMutationFunc;




