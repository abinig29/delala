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
import { FuelTypeEnum, TransmissionTypeEnum, VehicleConditionEnum, VehicleTypeEnum } from '@/lib/validation/product';
import { Input } from '@/components/ui/input';


const VehicleDetailForm = () => {
    const { control } = useFormContext<FormDataType>();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
                control={control}
                name="vehicleDetail.type"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Vehicle Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select vehicle type" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={VehicleTypeEnum.Enum.CAR}>Car</SelectItem>
                                <SelectItem value={VehicleTypeEnum.Enum.MOTORCYCLE}>Motorcycle</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Make */}
            <FormField
                control={control}
                name="vehicleDetail.make"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Make</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter make" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Model */}
            <FormField
                control={control}
                name="vehicleDetail.model"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Model</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter model" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Year */}
            <FormField
                control={control}
                name="vehicleDetail.year"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Year</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter year" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Price */}
            <FormField
                control={control}
                name="vehicleDetail.price"
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

            {/* Fuel Type */}
            <FormField
                control={control}
                name="vehicleDetail.fuelType"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Fuel Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select fuel type" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={FuelTypeEnum.Enum.PETROL}>Petrol</SelectItem>
                                <SelectItem value={FuelTypeEnum.Enum.DIESEL}>Diesel</SelectItem>
                                <SelectItem value={FuelTypeEnum.Enum.ELECTRIC}>Electric</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Transmission */}
            <FormField
                control={control}
                name="vehicleDetail.transmission"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Transmission</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select transmission" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={TransmissionTypeEnum.Enum.MANUAL}>Manual</SelectItem>
                                <SelectItem value={TransmissionTypeEnum.Enum.AUTOMATIC}>Automatic</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Mileage */}
            <FormField
                control={control}
                name="vehicleDetail.mileage"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Mileage (km)</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter mileage" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Condition */}
            <FormField
                control={control}
                name="vehicleDetail.condition"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Condition</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select condition" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={VehicleConditionEnum.Enum.NEW}>New</SelectItem>
                                <SelectItem value={VehicleConditionEnum.Enum.USED}>Used</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>

    )
}

export default VehicleDetailForm