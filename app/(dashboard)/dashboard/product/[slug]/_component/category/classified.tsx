import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FormDataType } from '../../page';
import { useFormContext } from 'react-hook-form';
import { FurnishingStatusEnum, ProductIntentEnum, PropertyTypeEnum } from '@/lib/validation/product';
import { Input } from '@/components/ui/input';
import { ExtendedCategory } from '@/types/db';
import { useFetchData } from '@/hooks/use-query';
import { KY } from '@/lib/constant';


const ClassifiedDetailForm = () => {
    const { control, watch } = useFormContext<FormDataType>();

    const { isLoading, data } = useFetchData<ExtendedCategory[]>(
        [KY.classified],
        `classified`,
    );

    const currentCategoryId = watch("classifiedDetail.categoryId")
    const currentSubCategoryId = watch("classifiedDetail.subCategoryId")

    const subCategoryList = data?.find(category => {
        return category?.id == currentCategoryId
    })?.subCategories


    const lastCategoryList = subCategoryList?.find(sub => {
        return sub?.id == currentSubCategoryId
    })?.lastCategories


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <FormField
                control={control}
                name="classifiedDetail.price"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter price" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Category Selection */}
            <FormField
                control={control}
                name="classifiedDetail.categoryId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {data?.map((category: ExtendedCategory) => (
                                    <SelectItem key={category.id} value={category.id}>
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Subcategory Selection */}
            <FormField
                control={control}
                name="classifiedDetail.subCategoryId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Subcategory</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select subcategory" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {subCategoryList?.map((subCategory) => (
                                    <SelectItem key={subCategory.id} value={subCategory.id}>
                                        {subCategory.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Last Category Selection */}
            <FormField
                control={control}
                name="classifiedDetail.lastCategoryId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Last Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select last category" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {lastCategoryList?.map((lastCategory) => (
                                    <SelectItem key={lastCategory.id} value={lastCategory.id}>
                                        {lastCategory.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>

    )
}

export default ClassifiedDetailForm