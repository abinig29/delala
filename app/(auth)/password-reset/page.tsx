"use client";

import { useState } from "react";
import { EmailInput } from "../_component/email";
import { NewPassword } from "../_component/new-password";
import { OtpComponent } from "../_component/otp";


export default function PasswordReset() {
  const [screen, setScreen] = useState<number>(1);

  return (
    <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-2 text-center">
        <div className="flex gap-2 items-center justify-center w-full">
          <h2 className="text-2xl font-semibold">Welcome Back to</h2>
          <h1 className="text-2xl font-bold text-main">Delala</h1>
        </div>
        <p className="text-sm text-gray-500">
          {screen === 1 &&
            "Enter your email to send password reset OTP."}
          {screen === 2 &&
            "Enter OTP you received via your email."}
          {screen === 3 &&
            "Enter your new password and confirm it to complete."}
        </p>
      </div>

      {screen === 1 && (
        <EmailInput setScreen={setScreen} />
      )}
      {screen === 2 &&
        <OtpComponent setScreen={setScreen} />
      }
      {screen === 3
        && <NewPassword />}
    </div>
  );
}
