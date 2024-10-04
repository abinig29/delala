"use client"
import { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone } from 'lucide-react'
import ContactModal from '@/components/contact-modal'
import { BreadcrumbCustom } from '@/components/common/breadcrumb-custom'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label'
import JobCard from './_component/card'
import FilterSidebar from './_component/filter-sidebar.'
import { PaginationCustom } from '@/components/pagination'
enum JobType {
    FullTime = "Full Time",
    PartTime = "Part Time",
    Remote = "Remote",
    Contract = "Contract"
}


export interface IJob {
    id: string
    title: string
    company: string
    location: string
    salary: number
    type: JobType
    category: string
    description: string
}


const jobs: IJob[] = [
    {
        id: "1",
        title: "Frontend Developer",
        company: "TechCorp",
        location: "San Francisco, CA",
        salary: 120000,
        type: JobType.FullTime,
        category: "Engineering",
        description: "We're seeking a skilled Frontend Developer to create responsive and intuitive user interfaces using modern web technologies."
    },
    {
        id: "2",
        title: "UX Designer",
        company: "DesignHub",
        location: "New York, NY",
        salary: 95000,
        type: JobType.Remote,
        category: "Design",
        description: "Join our team as a UX Designer to craft engaging and user-friendly digital experiences for our clients."
    },
    {
        id: "3",
        title: "Data Analyst",
        company: "DataDrive",
        location: "Chicago, IL",
        salary: 85000,
        type: JobType.Contract,
        category: "Data Science",
        description: "We're looking for a Data Analyst to help us turn complex data into actionable insights for our business decisions."
    },
    {
        id: "4",
        title: "Frontend Developer",
        company: "TechCorp",
        location: "San Francisco, CA",
        salary: 120000,
        type: JobType.FullTime,
        category: "Engineering",
        description: "We're seeking a skilled Frontend Developer to create responsive and intuitive user interfaces using modern web technologies."
    },
    {
        id: "5",
        title: "UX Designer",
        company: "DesignHub",
        location: "New York, NY",
        salary: 95000,
        type: JobType.Remote,
        category: "Design",
        description: "Join our team as a UX Designer to craft engaging and user-friendly digital experiences for our clients."
    },
    {
        id: "6",
        title: "Data Analyst",
        company: "DataDrive",
        location: "Chicago, IL",
        salary: 85000,
        type: JobType.Contract,
        category: "Data Science",
        description: "We're looking for a Data Analyst to help us turn complex data into actionable insights for our business decisions."
    }
]

export default function ServicePage() {
    const links = [
        { name: "Products", href: "/product" },
    ];



    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-6">
                <div className="text-sm breadcrumbs">
                    <BreadcrumbCustom links={links} currentPage='Job' />
                </div>
            </div>
            <div className='flex items-start gap-4'>
                <FilterSidebar />
                <div className='flex-[4]'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {jobs.map((job, index) => (
                            <JobCard job={job} key={index} />
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