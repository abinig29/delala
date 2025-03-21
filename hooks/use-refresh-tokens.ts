"use client";

import { axiosAuth } from "@/lib/axiosConfig";
import { signIn, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session, update } = useSession();
  const refreshToken = async () => {
    const res = await axiosAuth.post("/auth/refresh", { Jwt: session?.user?.authToken?.refreshToken });
    const resData = res.data.data
    if (res.data.data) {
      if (session) {
        session.user.authToken = resData;
        const user = { ...session.user, accessToken: resData.accessToken, refreshToken: resData.accessToken }
        await update({
          ...session,
          user,
        });
      } else signIn();
    }
    else {
      signIn();
    }

  };
  return refreshToken;
};
