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


const FilterSidebar = () => {
    return (
        <div className="w-full md:w-1/4 space-y-6 bg-white p-4  rounded h-fit">
            <div className="relative">
                <Input type="text" placeholder="Search Property" className="pl-10"/>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"  size={15}/>
            </div>

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

            <div>
                <h3 className=" mb-2">Property type</h3>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <h3 className=" mb-2">Bedrooms</h3>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <h3 className=" mb-2">Location</h3>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="downtown">Downtown</SelectItem>
                        <SelectItem value="suburb">Suburb</SelectItem>
                        <SelectItem value="beach">Beach</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex space-x-2">
                <Button variant="outline" className="w-1/2">Cancel</Button>
                <Button className="w-1/2">Apply</Button>
            </div>
        </div>
    )
}

export default FilterSidebar