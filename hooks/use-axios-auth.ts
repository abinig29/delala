"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRefreshToken } from "./use-refresh-tokens";
import { axiosAuth } from "@/lib/axiosConfig";

const useAxiosAuth = () => {
    const { data: session } = useSession();
    console.log({ session })
    const refreshToken = useRefreshToken();
    useEffect(() => {
        const requestIntercept = axiosAuth.interceptors.request.use(
            (config) => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${session?.user?.authToken?.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseIntercept = axiosAuth.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    await refreshToken();
                    prevRequest.headers["Authorization"] = `Bearer ${session?.user?.authToken?.accessToken}`;
                    return axiosAuth(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosAuth.interceptors.request.eject(requestIntercept);
            axiosAuth.interceptors.response.eject(responseIntercept);
        };
    }, [session, refreshToken]);

    return axiosAuth;
};

export default useAxiosAuth;
