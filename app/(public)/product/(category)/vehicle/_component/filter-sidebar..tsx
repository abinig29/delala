import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import ModelFilter from './model'


const FilterSidebar = () => {
    const vehicleTypes = [
        "Motor Car (Passenger Car)",
        "Motorcycle",
        "Truck",
        "Light Truck",
        "Heavy Truck",
        "Bus",
        "SUV (Sport Utility Vehicle)",
        "Van",
        "Bicycle",
        "Electric Vehicle (EV)",
        "Scooter",
        "ATV (All-Terrain Vehicle)",
        "Tractor",
        "Trailer"
    ];


    const fuelType = [
        "Diesel",
        "Electric",
        "Hybrid",
        "Hybrid Plugin",
        "Petrol",
        "Other",
    ]


    return (
        <div className="w-full md:w-1/4 space-y-6 bg-white p-4  rounded h-fit">
            <div className="relative">
                <Input type="text" placeholder="Search Vehicle" className="pl-10" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={15} />
            </div>


            <div>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Fuel Type" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            fuelType?.map(vt => {
                                return <SelectItem key={vt} value={vt}>{vt}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Vehicle Type" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            vehicleTypes?.map(vt => {
                                return <SelectItem key={vt} value={vt}>{vt}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>
            </div>
            <ModelFilter />
            <div>
                <button
                    className="flex items-center justify-between w-full text-left"
                >
                    Price

                </button>

                <div className="mt-2  flex items-center gap-2 placeholder:font-light placeholder:text-xs">
                    <Input type="number" placeholder="Min" />
                    <Input type="number" placeholder="Max" />
                </div>
            </div>

            <div className="flex space-x-2">
                <Button variant="outline" className="w-1/2">Cancel</Button>
                <Button className="w-1/2">Apply</Button>
            </div>
        </div>
    )
}

export default FilterSidebar