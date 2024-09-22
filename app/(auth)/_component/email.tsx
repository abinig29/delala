"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import useMutationFunc from "@/hooks/use-mutation";
import { MTD } from "@/lib/constant";
import { resetPasswordEmailSchema } from "@/lib/validation/auth";

export const EmailInput = ({
  setScreen,
}: {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
}) => {
  type emailType = z.infer<typeof resetPasswordEmailSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<emailType>({
    resolver: zodResolver(resetPasswordEmailSchema),
  });
  const router = useRouter();
  const { mutateAsync, isPending } = useMutationFunc({
    onSuccess: (data: any) => {
      toast({
        variant: "default",
        title: "Check Your Email",
        description: " you will receive a password reset OTP.",
      });
      setScreen(2);
      router.push(`/password-reset?email=${watch("email")}`);
    },
    onError: (data) => {
      toast({
        variant: "default",
        title: "Something went wrong!",
        description: `error: ${data?.message}`,
        action: (
          <ToastAction
            onClick={async () => {
              operation();
            }}
            altText="Try again"
          >
            Try again
          </ToastAction>
        ),
      });
    },
  });
  const operation = async () => {
    try {
      await mutateAsync({
        url: "auth/forgotPassword",
        method: MTD.POST,
        body: {
          email: watch("email"),
        },
      });
    } catch (error) { }
  };

  async function onSubmit() {
    await operation();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Input
            id="email"
            type="email"
            autoCapitalize="none"
            autoCorrect="off"
            placeholder="placeholde@gmail.com"
            // disabled={isLoading}
            {...register("email")}
          />
          {errors?.email && (
            <p className="px-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <Button
          type="submit"
          isLoading={isPending}
          className="bg-main text-white hover:bg-main/80"
        >
          Send OTP
        </Button>
      </div>
    </form>
  );
};
