"use client"
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const GlobalFilter = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [classifiedType, setClassifiedType] = useState('Electronics')


    return (
        <div className="max-w-7xl mx-auto  mb-6">
            <div className='  flex items-center space-x-2 '>
                <div className="relative flex-grow ">
                    {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} /> */}
                    <Input
                        type="text"
                        placeholder="Find items for sale, like Samsung Laptop"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-32 py-6 h-8 w-full"
                    />
                </div>
                <div className="  ">
                    <Select value={classifiedType} onValueChange={setClassifiedType}>
                        <SelectTrigger className="w-[230px] py-6">
                            <SelectValue placeholder="Electronics" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Electronics">Electronics</SelectItem>
                            <SelectItem value="Furniture">Furniture</SelectItem>
                            <SelectItem value="Clothing">Clothing</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button className="bg-main  hover:bg-main/80 py-6 gap-2">
                    <Search className=" " size={20} />
                    Find</Button>
            </div>
        </div>
    )
}

export default GlobalFilter