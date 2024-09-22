"use client"
import FormInput from '@/components/form-filed/form-input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import useSuccessToasts from '@/hooks/use-customToast';
import useMutationFunc from '@/hooks/use-mutation';
import { MTD } from '@/lib/constant';
import { logTrace } from '@/lib/logger';
import { loginSchema } from '@/lib/validation/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import { FieldPath, useForm } from 'react-hook-form';
import { z } from 'zod';


type FormDataType = z.infer<typeof loginSchema>;
type FormFiledType = FieldPath<FormDataType>;
const LoginForm = ({ searchParams }: { searchParams: { from: string } }) => {
    const { loginSuccess, errorWithAction } = useSuccessToasts();
    const callbackUrl = searchParams?.from || "/dashboard";
    const form = useForm<FormDataType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { mutateAsync, isPending } = useMutationFunc({
        onSuccess: (data: any) => {
            signIn("credentials", {
                data: JSON.stringify(data),
                redirect: true,
                callbackUrl,
            });
            form.reset()
            loginSuccess();
        },
        onError: (data) => {
            errorWithAction(data?.message, () => onSubmit(form.getValues()));
        },
    });

    const onSubmit = async (data: FormDataType) => {
        const dataToBeSent = {
            email: data.email,
            password: data.password,
        };
        try {
            await mutateAsync({
                url: "auth/login",
                method: MTD.POST,
                body: dataToBeSent,
            });
        } catch (e: any) {
            logTrace("LOGIN ERROR=>/////", e);
        }
    };
    return (
        <Form {...form}>
            <form className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="space-y-2">
                    <FormInput<FormFiledType>
                        control={form.control}
                        disabled={isPending}
                        name="email"
                        label={"Email"}
                        autoCapitalize="none"
                        autoCorrect="off"
                    />
                </div>
                <div className="space-y-2">
                    <FormInput<FormFiledType>
                        control={form.control}
                        disabled={isPending}
                        name="password"
                        label={"Password"}
                        autoCapitalize="none"
                        autoCorrect="off"
                    />
                </div>
                <Button
                    isLoading={isPending}
                    className="w-full bg-emerald-500 hover:bg-emerald-600" type="submit">
                    Sign in
                </Button>
            </form>
        </Form>

    )
}

export default LoginForm