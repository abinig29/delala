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
import { FurnishingStatusEnum, JobTypeEnum, ProductIntentEnum, PropertyTypeEnum } from '@/lib/validation/product';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';


const JobDetailForm = () => {
    const { control } = useFormContext<FormDataType>();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Type */}
            <FormField
                control={control}
                name="jobDetail.type"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Job Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select job type" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={JobTypeEnum.Enum.FULL_TIME}>Full-time</SelectItem>
                                <SelectItem value={JobTypeEnum.Enum.PART_TIME}>Part-time</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Company */}
            <FormField
                control={control}
                name="jobDetail.company"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter company name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Location */}
            <FormField
                control={control}
                name="jobDetail.location"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter job location" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Salary */}
            <FormField
                control={control}
                name="jobDetail.salary"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Salary</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter salary" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className=' col-span-2'>
                <FormField
                    control={control}
                    name="jobDetail.description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter job description" {...field} className='min-h-40' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

        </div>

    )
}

export default JobDetailForm