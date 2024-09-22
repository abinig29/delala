import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Avatar from "./avatar";
import DeleteAccount from "./delete-account";
import { IUserWithProfile } from "@/types/interface";
import { useFetchData } from "@/hooks/use-query";
import { KY, MTD } from "@/lib/constant";
import { FieldPath, useForm } from "react-hook-form";
import { updateProfileSchema } from "@/lib/validation/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useSuccessToasts from "@/hooks/use-customToast";
import { Form } from "@/components/ui/form";
import { logTrace } from "@/lib/logger";
import useMutationFunc from "@/hooks/use-mutation";
import FormInput from "@/components/form-filed/form-input";
import { useEffect } from "react";

type FormDataType = z.infer<typeof updateProfileSchema>;
type FormFiledType = FieldPath<FormDataType>;
export function BasicInfo() {
  const { loginSuccess, errorWithAction } = useSuccessToasts();
  const { isLoading, data, error, isSuccess } = useFetchData<IUserWithProfile>(
    [KY.profile],
    `profile`,
  );

  const { mutateAsync, isPending } = useMutationFunc({
    onSuccess: (data: any) => {
    },
    onError: (data) => {
      errorWithAction(data?.message, () => onSubmit(form.getValues()));
    },
  });

  const form = useForm<FormDataType>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      fullName: "",
      address: "",
      phone: "",
    }
  });
  const onSubmit = async (data: FormDataType) => {
    const dataToBeSent = {
      fullName: data?.fullName,
      address: data?.address,
      phone: data?.phone
    };
    try {
      await mutateAsync({
        url: "profile",
        method: MTD.PATCH,
        body: dataToBeSent,
      });
    } catch (e: any) {
      logTrace("UPDATE PROFILE ERROR=>/////", e);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      form.setValue("address", data?.profile?.address ?? "")
      form.setValue("phone", data?.profile?.phone ?? "")
      form.setValue("fullName", data?.fullName ?? "")
    }

  }, [isSuccess])

  return (
    <div className="flex h-[90vh] min-h-screen w-[calc(100vw-250px)] flex-col overflow-y-auto p-6 pb-32">
      <div className="flex w-full flex-col sm:gap-4  sm:py-4 ">
        <main className="grid max-w-4xl flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Avatar image={data?.profile?.avatar} />
          <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
              <CardTitle>User Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className="space-y-4"
                  onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormInput<FormFiledType>
                        control={form.control}
                        disabled={isPending}
                        name="fullName"
                        label={"Full Name"}
                        autoCapitalize="none"
                        autoCorrect="off"
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormInput<FormFiledType>
                        control={form.control}
                        disabled={isPending}
                        name="phone"
                        label={"Phone Number"}
                        autoCapitalize="none"
                        autoCorrect="off"
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormInput<FormFiledType>
                        control={form.control}
                        disabled={isPending}
                        name="address"
                        label={"Address"}
                        autoCapitalize="none"
                        autoCorrect="off"
                      />
                    </div>
                    <div className="flex flex-end">
                      <Button
                        type="submit"
                        isLoading={isPending}
                        variant={"outline"}
                      >Save
                      </Button>
                    </div>
                  </div>
                </form>
              </Form >


            </CardContent>
            {/* <CardFooter className=" justify-end">
              <Button
                type="submit"
                isLoading={isLoading}
                variant={"outline"}
              >Save
              </Button>
            </CardFooter> */}
          </Card>
          <DeleteAccount />
        </main>
      </div>
    </div>
  );
}
