import React from 'react'
import Image from "next/image"
import {
    Upload,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'
import { useFormContext } from 'react-hook-form'
import { FormDataType, FormFiledType } from '../page'
import FormInput from '@/components/form-filed/form-input'
import FormTextarea from '@/components/form-filed/form-textarea'


const ProductDetail = () => {
    const { control } = useFormContext<FormDataType>();
    return (
        <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                    Enter the product name and key features that describe your product.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <FormInput<FormFiledType>
                            control={control}
                            name="name"
                            label={"Name"}
                            autoCapitalize="none"
                            autoCorrect="off"
                        />
                    </div>
                    <div className="grid gap-3">
                        <FormTextarea
                            control={control}
                            name="description"
                            label={"Description"}
                            className='min-h-32 w-full'
                        />
                    </div>
                    <div className="grid gap-3">
                        <FormTextarea
                            control={control}
                            name="features"
                            label={"Features"}
                            className='min-h-32'
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductDetail