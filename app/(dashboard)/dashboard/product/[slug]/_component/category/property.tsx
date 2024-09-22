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


const PropertyDetailForm = () => {
    const { control } = useFormContext<FormDataType>();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Property Type */}
            <FormField
                control={control}
                name="propertyDetail.type"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Property Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={PropertyTypeEnum.Enum.RESIDENTIAL}>Residential</SelectItem>
                                <SelectItem value={PropertyTypeEnum.Enum.COMMERCIAL}>Commercial</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Product Intent */}
            <FormField
                control={control}
                name="propertyDetail.intent"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Intent</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select intent" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={ProductIntentEnum.Enum.SALE}>Sale</SelectItem>
                                <SelectItem value={ProductIntentEnum.Enum.RENTAL}>Rental</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Price */}
            <FormField
                control={control}
                name="propertyDetail.price"
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

            {/* Location */}
            <FormField
                control={control}
                name="propertyDetail.location"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter location" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Bedrooms */}
            <FormField
                control={control}
                name="propertyDetail.bedrooms"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Bedrooms</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter number of bedrooms" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Bathrooms */}
            <FormField
                control={control}
                name="propertyDetail.bathrooms"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Bathrooms</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter number of bathrooms" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Furnishing */}
            <FormField
                control={control}
                name="propertyDetail.furnishing"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Furnishing</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select furnishing status" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={FurnishingStatusEnum.Enum.FURNISHED}>Furnished</SelectItem>
                                <SelectItem value={FurnishingStatusEnum.Enum.UNFURNISHED}>Unfurnished</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Area */}
            <FormField
                control={control}
                name="propertyDetail.area"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Area (sqm)</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter area" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
}

export default PropertyDetailForm