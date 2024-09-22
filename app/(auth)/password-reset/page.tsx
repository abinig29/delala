"use client";
import { Metadata } from "next";
import Link from "next/link";

import { useState } from "react";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/util/utils";
import { EmailInput } from "../_component/email";
import { NewPassword } from "../_component/new-password";
import { OtpComponent } from "../_component/otp";

export enum ResetScreenType {
  EMAIL,
  OTP,
  NEW_PASSWORD,
}
export default function PasswordReset() {
  const [screen, setScreen] = useState<ResetScreenType>(ResetScreenType?.EMAIL);

  return (
    <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-2 text-center">
        <div className="flex gap-2 items-center justify-center w-full">
          <h2 className="text-2xl font-semibold">Welcome Back to</h2>
          <h1 className="text-2xl font-bold text-main">Delala</h1>
        </div>
        <p className="text-sm text-gray-500">
          {screen === ResetScreenType.EMAIL &&
            "Enter your email to send password reset OTP."}
          {screen === ResetScreenType.OTP &&
            "Enter OTP you received via your email."}
          {screen === ResetScreenType.NEW_PASSWORD &&
            "Enter your new password and confirm it to complete."}
        </p>
      </div>

      {screen === ResetScreenType.EMAIL && (
        <EmailInput setScreen={setScreen} />
      )}
      {screen === ResetScreenType.OTP &&
        <OtpComponent setScreen={setScreen} />
      }
      {screen === ResetScreenType.NEW_PASSWORD
        && <NewPassword />}
    </div>
  );
}
