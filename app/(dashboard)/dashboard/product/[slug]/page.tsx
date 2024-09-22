"use client"
import React, { useEffect } from 'react'
import Header from './_component/header'
import SectionWrapper from '@/components/common/section-wrapper'
import ProductDetail from './_component/product-detail'
import ProductCategory from './_component/product-category'
import ProductStatus from './_component/product-status'
import ProductImage from './_component/product-image'
import ArchiveProduct from './_component/archive-product'
import { FieldPath, useForm } from 'react-hook-form'
import { CreateProductSchema } from '@/lib/validation/product'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { IProduct } from '@/types/db'
import useMutationFunc from '@/hooks/use-mutation'
import { KY, MTD } from '@/lib/constant'
import useSuccessToasts from '@/hooks/use-customToast'
import { useRouter } from 'next/navigation'
import { useFetchData } from '@/hooks/use-query'


export type FormDataType = z.infer<typeof CreateProductSchema>;
export type FormFiledType = FieldPath<FormDataType>;


const ProductCreate = ({ params }: { params: { slug: string } }) => {
    const isCreate = params?.slug === "create"

    const { isLoading, data, error, isSuccess } = useFetchData<IProduct>(
        [KY.product, params?.slug],
        `product/${params?.slug}`,
        !isCreate
    );


    const { errorNoAction, productCreated, productUpdated } = useSuccessToasts()
    const form = useForm<FormDataType>({
        resolver: zodResolver(CreateProductSchema),
        defaultValues: {
            status: "DRAFT",
            category: "VEHICLE",
            images: []
        }
    });
    const router = useRouter()
    const {
        isPending,
        mutateAsync
    } = useMutationFunc({
        onSuccess: (newData: IProduct) => {
            isCreate ?
                productCreated() :
                productUpdated()
            form.reset()
            router.push("/dashboard/product")
        },
        onError: (data) => {
            errorNoAction(data?.message)
        },
    });


    useEffect(() => {
        if (isSuccess && data) {
            form.reset({
                ...data,
            });
        }
    }, [isSuccess, data, form.reset]);

    const isError = !isCreate && error


    const onSubmit = async (data: FormDataType) => {
        try {
            await mutateAsync({
                url: isCreate ? `product` : `product/${params?.slug}`,
                method: isCreate ? MTD.POST : MTD.PATCH,
                body: data,

            });
        } catch (e: any) {
            console.log(e.message);
        }
    };

    return (
        <SectionWrapper className="px-10 h-[90vh]  overflow-y-auto">
            {/* <pre>{JSON.stringify(form.getValues(), 0, 1)}</pre> */}
            {!isError ? < Form {...form}>
                <form className="space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <Header isPending={isPending} isCreate={isCreate} />
                    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8 my-4">
                        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                            <ProductDetail />
                            <ProductCategory />

                        </div>
                        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                            <ProductStatus />
                            <ProductImage />
                            {/* <ArchiveProduct /> */}
                        </div>
                    </div>
                </form>
            </Form > :
                <div>
                    {
                        error?.message
                    }
                </div>
            }
        </SectionWrapper >
    )
}

export default ProductCreate