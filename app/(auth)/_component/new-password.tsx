"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import useMutationFunc from "@/hooks/use-mutation";
import { MTD } from "@/lib/constant";
import { newPasswordSchema } from "@/lib/validation/auth";

export const NewPassword = ({ email, pin, userId }: { email?: string, pin?: string, userId?: string }) => {
  const router = useRouter();
  type FormData = z.infer<typeof newPasswordSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { mutateAsync, isPending } = useMutationFunc({
    onSuccess: (data: any) => {
      toast({
        variant: "default",
        title: "Password Changed",
        description: "You password has been changed successfully ",
      });
      router.push("/login");
    },
    onError: (data) => {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: `${data?.message}`,
      });
    },
  });
  async function onSubmit(data: FormData) {
    const dataToBeSent = {
      email,
      userId,
      code: pin,
      newPassword: data.password,
      resetAllSessions: true
    };
    try {
      await mutateAsync({
        url: "auth/resetPassword",
        method: MTD.POST,
        body: dataToBeSent,
      });
    } catch (e: any) { }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label className="text-muted-foreground" htmlFor=" email">
            New Password
          </Label>
          <Input
            id="password"
            type="password"
            autoCapitalize="none"
            autoCorrect="off"
            // disabled={isLoading}
            {...register("password")}
          />
          {errors?.password && (
            <p className="px-1 text-xs text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="grid gap-1">
          <Label className="text-muted-foreground" htmlFor=" email">
            Confirm New Password
          </Label>
          <Input
            id="confirmpPassword"
            type="password"
            autoCapitalize="none"
            autoCorrect="off"
            // disabled={isLoading}
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword && (
            <p className="px-1 text-xs text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          isLoading={isPending}
          className="bg-main text-white hover:bg-main/80"
        >
          Set New Password
        </Button>
      </div>
    </form>
  );
};
