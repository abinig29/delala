"use client"
import { useState } from 'react'
import { Heart, Building2, MapPin, DollarSign, Briefcase, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from '@/components/ui/badge'
const job = {
    id: "1",
    productId: "prod1",
    name: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: 120000,
    type: "Full Time",
    jobCategoryId: "cat1",
    jobCategory: { name: "Engineering" },
    workArrangement: "Hybrid",
    description: "We're seeking a skilled Frontend Developer to create responsive and intuitive user interfaces using modern web technologies. The ideal candidate will have a strong foundation in HTML, CSS, and JavaScript, with experience in React and Next.js. You'll work closely with our design and backend teams to build seamless user experiences for our cutting-edge web applications."
}


const ApplyButton = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <SheetTrigger asChild>
                <Button className='w-full'>Apply Now</Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[00px] sm:w-[640px] overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>{job.name}</SheetTitle>
                    <SheetDescription className='flex items-center justify-between'>
                      <span> {job.company}</span> 
                        <Badge>Engineering</Badge>

                    </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                    <div className="flex items-center mb-2">
                        <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>{job.location}</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <DollarSign className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>${job.salary?.toLocaleString()}/year</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <Briefcase className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>{job.type.replace('_', ' ').toLowerCase()}</span>
                    </div>

                    <div className="flex items-center mb-4">
                        <Globe className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>{job.workArrangement}</span>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Job Description</h3>
                        <p className="text-sm text-muted-foreground">{job.description}</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your full name" required />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your email address" required />
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="tel" placeholder="Your phone number" required />
                        </div>
                        <div>
                            <Label htmlFor="note">Note</Label>
                            <Textarea id="note" placeholder="Any additional information" rows={6} />
                        </div>
                        <Button type="submit" className="w-full">Submit Application</Button>
                    </form>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default ApplyButton