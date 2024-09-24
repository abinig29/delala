"use client";

import { useState } from "react";
import { EmailInput } from "../_component/email";


export default function PasswordReset() {

  return (
    <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-2 text-center">
        <div className="flex gap-2 items-center justify-center w-full">
          <h2 className="text-2xl font-semibold">Welcome Back to</h2>
          <h1 className="text-2xl font-bold text-main">Delala</h1>
        </div>
        <p className="text-sm text-gray-500">
          Enter your email to send password reset OTP.
        </p>
      </div>
      <EmailInput />
    </div>
  );
}
