"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { otpSchema } from "@/lib/validation/auth";
import { ResetScreenType } from "../password-reset/page";
import { useState } from "react";
import OTPInput from "react-otp-input";

export const OtpComponent = ({
  setScreen,
}: {
  setScreen: React.Dispatch<React.SetStateAction<ResetScreenType>>;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");
  const [otp, setOtp] = useState('');


  const onSubmit = async () => {
    router.push(`/password-reset?email=${email}&pin=${otp}`);
    setScreen(ResetScreenType?.NEW_PASSWORD);
  };


  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-3">
          <div className="flex w-full justify-center">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              inputStyle={{ width: '40px', height: '40px', fontSize: '16px', border: "1px black solid", margin: "0px 8px", borderRadius: "6px" }}
              renderInput={(props) => <input  {...props} />
              }
            />
          </div>
          <Button
            type="submit"
            isLoading={false}
            className="bg-main text-white hover:bg-main/80"
          >
            Verify Otp
          </Button>
        </div>
      </form>
    </div>
  );
};
