"use client";
import { ReactHTMLElement, useState } from "react";
import OtpInput from 'react-otp-input';
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/lib/validation/auth";
import { FieldPath, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/util/utils";
import { z } from "zod";
import FormInput from "@/components/form-filed/form-input";
import { Button } from "@/components/ui/button";
import useMutationFunc from "@/hooks/use-mutation";
import useSuccessToasts from "@/hooks/use-customToast";


type FormDataType = z.infer<typeof SignUpSchema>;
type FormFiledType = FieldPath<FormDataType>;
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }
function SignUpUpForm({ className, ...props }: UserAuthFormProps) {
    const {
        signUpSuccess,
        errorNoAction,
        errorWithAction,
        verificationSuccess
    } = useSuccessToasts();
    const [screen, setScreen] = useState(1)
    const router = useRouter()
    const [email, setEmail] = useState('')

    const [otp, setOtp] = useState('');

    const form = useForm<FormDataType>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            email: "",
            password: "",
            fullName: "",
        }
    });
    const { isPending, isError, mutateAsync } = useMutationFunc(
        {
            onSuccess: (data: any) => {
                setEmail(form.getValues("email"))
                signUpSuccess()
                setScreen(2)
                form.reset()
            },
            onError: (data) => {
                errorWithAction(data?.message, () => onSubmit(form.getValues()))
            },
        }
    );
    const {
        isPending: verificationLoading,
        mutateAsync: verify } = useMutationFunc({
            onSuccess: () => {
                verificationSuccess()
                router.push('/login')
                setTimeout(() => {
                    setScreen(1)
                }, 1000)
            },
            onError: (data) => {
                errorWithAction(data?.message, () => verifyOtp())
            },
        });

    const onSubmit = async (data: FormDataType) => {
        const dataToBeSent = {
            email: data.email,
            password: data.password,
            fullName: data.fullName,
        };
        try {
            await mutateAsync({
                url: "auth/signup",
                method: "POST",
                body: dataToBeSent,

            });
        } catch (e: any) {
            console.log(e.message);
        }
    };


    const verifyOtp = async () => {
        if (otp.length != 5) return errorNoAction("OTP code should have 5 numbers")
        if (!email) {
            setScreen(1)
            return errorNoAction("Please crate account first")
        }
        const body = {
            email: email,
            code: otp
        }
        try {
            await verify({
                url: "auth/activate",
                method: "POST",
                body,

            });
        } catch (e: any) {
            console.log(e.message);
        }
    }

    return (
        <div className={cn("grid gap-3 ml-4", className)} {...props}>
            {screen === 1 ?
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" >
                            <FormInput<FormFiledType>
                                control={form.control}
                                disabled={isPending}
                                name="fullName"
                                label={"Full Name"}
                                autoCapitalize="none"
                                autoCorrect="off"
                            />
                            <FormInput<FormFiledType>
                                control={form.control}
                                disabled={isPending}
                                name="email"
                                label={"Email"}
                                autoCapitalize="none"
                                autoCorrect="off"
                            />
                            <FormInput<FormFiledType>
                                control={form.control}
                                disabled={isPending}
                                name="password"
                                label={"Password"}
                                autoCapitalize="none"
                                autoCorrect="off"
                            />
                            <Button
                                isLoading={isPending}
                                className="w-full bg-emerald-500 hover:bg-emerald-600" type="submit">
                                Sign up
                            </Button>


                        </form>
                    </Form>

                </div> :
                <div className=" mb-10 flex-col p-4">
                    <div className="flex flex-col justify-center gap-8 items-center">
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={5}
                            inputStyle={{ width: '40px', height: '40px', fontSize: '16px', border: "1px black solid", margin: "0px 8px", borderRadius: "6px" }}
                            renderInput={(props) => <input  {...props} />
                            }
                        />
                        <div className="flex w-full gap-4">
                            <Button
                                isLoading={verificationLoading}
                                onClick={verifyOtp}
                                className=" bg-emerald-500 hover:bg-emerald-600 w-full text-white">
                                Verify Otp
                            </Button>

                        </div>


                    </div>


                </div>
            }
        </div >
    )
}

export default SignUpUpForm;