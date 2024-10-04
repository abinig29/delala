import React, { useState } from 'react'
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
import CategoryFilter from './category'
import { Slider } from "@/components/ui/slider"


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


    const JobType = [
        "Full Time",
        "Part Time",
        "Remote",
        "Contract"
    ]
    const [minimumWage, setMinimumWage] = useState(50000)

    return (
        <div className="w-full md:w-1/4 space-y-6 bg-white p-4  rounded h-fit flex-1">
            {/* <div className="relative">
                <Input type="text" placeholder="Search Vehicle" className="pl-10" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={15} />
            </div> */}


            <div>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Job Type" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            JobType?.map(vt => {
                                return <SelectItem value={vt}>{vt}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>
            </div>
            <div>
                <h3 className="mb-2 text-sm">Minimum Wage</h3>
                <Slider
                    min={0}
                    max={200000}
                    step={1000}
                    value={[minimumWage]}
                    onValueChange={(value) => setMinimumWage(value[0])}
                />
                <div className="mt-2 text-sm text-muted-foreground">${minimumWage.toLocaleString()}/year</div>
            </div>
            <CategoryFilter />
            {/* <div>
                <button
                    className="flex items-center justify-between w-full text-left"
                >
                    Price

                </button>

                <div className="mt-2  flex items-center gap-2 placeholder:font-light placeholder:text-xs">
                    <Input type="number" placeholder="Min" />
                    <Input type="number" placeholder="Max" />
                </div>
            </div> */}

            <div className="flex space-x-2">
                <Button variant="outline" className="w-1/2">Cancel</Button>
                <Button className="w-1/2">Apply</Button>
            </div>
        </div>
    )
}

export default FilterSidebar