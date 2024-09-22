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
import { useFetchData } from '@/hooks/use-query';
import { IService } from '@/types/db';
import { KY } from '@/lib/constant';


const ServiceDetailForm = () => {
    const { control } = useFormContext<FormDataType>();
    const { isLoading, data, } = useFetchData<IService[]>(
        [KY.service],
        `service`,
    );


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
                control={control}
                name="serviceDetail.price"
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

            <FormField
                control={control}
                name="serviceDetail.serviceId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Service</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {data?.map((service) => (
                                    <SelectItem key={service.id} value={service.id}>
                                        {service.name}
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

export default ServiceDetailForm