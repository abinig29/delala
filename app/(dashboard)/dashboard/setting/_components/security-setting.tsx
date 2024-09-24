import FormInput from "@/components/form-filed/form-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useSuccessToasts from "@/hooks/use-customToast";
import useMutationFunc from "@/hooks/use-mutation";
import { MTD } from "@/lib/constant";
import { logTrace } from "@/lib/logger";
import { ChangePasswordSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldPath, useForm } from "react-hook-form";
import { z } from "zod";

type FormDataType = z.infer<typeof ChangePasswordSchema>;
type FormFiledType = FieldPath<FormDataType>;
export function SecuritySetting() {
  const { errorNoAction, changePasswordSuccess } = useSuccessToasts()
  const form = useForm<FormDataType>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    }
  });
  const { mutateAsync, isPending } = useMutationFunc({
    onSuccess: (data: any) => {
      changePasswordSuccess()
      form.reset()
    },
    onError: (data) => {
      errorNoAction(data?.message);
      form.reset()
    },
  });
  const onSubmit = async (data: FormDataType) => {
    const dataToBeSent = {
      oldPassword: data?.oldPassword,
      newPassword: data?.newPassword
    };
    try {
      await mutateAsync({
        url: "auth/changePassword",
        method: MTD.PATCH,
        body: dataToBeSent,
      });
    } catch (e: any) {
      logTrace("UPDATE PASSWORD IMAGE=>/////", e);
    }
  };
  return (
    <div className="flex h-[90vh] min-h-screen w-[calc(100vw-250px)] flex-col overflow-y-auto p-6 pb-32">
      <div className="flex w-full flex-col sm:gap-4  sm:py-4 ">
        <main className="grid max-w-4xl flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" >
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormInput<FormFiledType>
                        type="password"
                        control={form.control}
                        disabled={isPending}
                        name="oldPassword"
                        label={"Old Password"}
                        autoCapitalize="none"
                        autoCorrect="off"
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormInput<FormFiledType>
                        type="password"
                        control={form.control}
                        disabled={isPending}
                        name="newPassword"
                        label={"New Password"}
                        autoCapitalize="none"
                        autoCorrect="off"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="ju justify-end">
                  <Button variant={"outline"}>Change Password</Button>
                </CardFooter>
              </Card>
            </form>
          </Form >
        </main>
      </div>
    </div>
  );
}
