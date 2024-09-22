import React, { useEffect } from 'react'
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useFormContext } from 'react-hook-form'
import { FormDataType } from '../page'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { ProductCategory } from '@/types/db'
import PropertyDetailForm from './category/property'
import VehicleDetailForm from './category/vehicle'
import JobDetailForm from './category/job'
import ServiceDetailForm from './category/service'
import ClassifiedDetailForm from './category/classified'
import { categoryFieldsMap } from '@/lib/constant'

type detailType = "propertyDetail" | "vehicleDetail" | "jobDetail" | "serviceDetail" | "classifiedDetail"
const ProductCategoryComponent = () => {
    const { control, watch, setValue } = useFormContext<FormDataType>();
    const category = watch('category');

    useEffect(() => {
        const fieldsToClear = categoryFieldsMap[category] as detailType[];
        fieldsToClear?.forEach((field: detailType) => {
            setValue(field, undefined);
        });
    }, [category, setValue]);

    const renderDetailForm = () => {
        switch (watch("category")) {
            case "PROPERTY":
                return <PropertyDetailForm />;
            case "VEHICLE":
                return <VehicleDetailForm />;
            case "JOB":
                return <JobDetailForm />;
            case "SERVICE":
                return <ServiceDetailForm />;
            case "CLASSIFIED":
                return <ClassifiedDetailForm />
            default:
                return null;
        }
    };
    return (
        <div>
            <Card x-chunk="dashboard-07-chunk-2">
                <CardHeader>
                    <CardTitle>Product Category</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6">
                        <div className="grid gap-3">
                            <FormField
                                control={control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue defaultValue={ProductCategory.PROPERTY} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem className=' capitalize' value={ProductCategory.PROPERTY}>{ProductCategory.PROPERTY.toLowerCase()}</SelectItem>
                                                <SelectItem className=' capitalize' value={ProductCategory.VEHICLE}>{ProductCategory.VEHICLE.toLowerCase()}</SelectItem>
                                                <SelectItem className=' capitalize' value={ProductCategory.SERVICE}>{ProductCategory.SERVICE.toLowerCase()}</SelectItem>
                                                <SelectItem className=' capitalize' value={ProductCategory.JOB}>{ProductCategory.JOB.toLowerCase()}</SelectItem>
                                                <SelectItem className=' capitalize' value={ProductCategory.CLASSIFIED}>{ProductCategory.CLASSIFIED.toLowerCase()}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {renderDetailForm()}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div >
    )
}

export default ProductCategoryComponent


