"use client"
import { useState } from 'react'
import { Search, Heart, ChevronDown, ChevronUp, Bath, Home, Bed } from 'lucide-react'
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import FilterSidebar from './_component/filter-sidebar.'
import PropertyCard from './_component/property-card'
import { PaginationCustom } from '@/components/pagination'
import { BreadcrumbCustom } from '@/components/common/breadcrumb-custom'
import PropertyTab from './_component/tab'

export default function PropertyListing() {
    const links = [
        { name: "Products", href: "/product" },
    ];
    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-6">
                <div className="text-sm breadcrumbs">
                    <BreadcrumbCustom links={links} currentPage='Property' />
                </div>
                <PropertyTab />
                <div></div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <FilterSidebar />
                <div className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                            <PropertyCard key={index} />
                        ))}
                    </div>
                    <div className='mt-10'>
                        <PaginationCustom pages={4} />
                    </div>

                </div>
            </div>
        </div>
    )
}