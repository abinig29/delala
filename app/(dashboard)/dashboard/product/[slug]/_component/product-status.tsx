import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ProductStatus } from '@/types/db'
import { useFormContext } from 'react-hook-form'
import { FormDataType } from '../page'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const ProductStatusComponent = () => {
    const { control } = useFormContext<FormDataType>();
    return (
        <Card x-chunk="dashboard-07-chunk-3">
            <CardHeader>
                <CardTitle>Product Status</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <FormField
                            control={control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue defaultValue={ProductStatus.DRAFT} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem className=' capitalize' value={ProductStatus.ACTIVE}>Active</SelectItem>
                                            <SelectItem className=' capitalize' value={ProductStatus.ARCHIVE}>Archive</SelectItem>
                                            <SelectItem className=' capitalize' value={ProductStatus.DRAFT}>Draft</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductStatusComponent


