import React from 'react'
import Image from "next/image"
import {
    Upload,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'


const ProductDetail = () => {
    return (
        // <div>
        //     <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
        //         <Card x-chunk="dashboard-07-chunk-0">
        //             <CardHeader>
        //                 <CardTitle>Product Details</CardTitle>
        //                 <CardDescription>
        //                     Lipsum dolor sit amet, consectetur adipiscing elit
        //                 </CardDescription>
        //             </CardHeader>
        //             <CardContent>
        //                 <div className="grid gap-6">
        //                     <div className="grid gap-3">
        //                         <Label htmlFor="name">Name</Label>
        //                         <Input
        //                             id="name"
        //                             type="text"
        //                             className="w-full"
        //                             defaultValue="Gamer Gear Pro Controller"
        //                         />
        //                     </div>
        //                     <div className="grid gap-3">
        //                         <Label htmlFor="description">Description</Label>
        //                         <Textarea
        //                             id="description"
        //                             defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
        //                             className="min-h-32"
        //                         />
        //                     </div>
        //                 </div>
        //             </CardContent>
        //         </Card>


        //     </div>
        //     <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
        //         <Card x-chunk="dashboard-07-chunk-3">
        //             <CardHeader>
        //                 <CardTitle>Product Status</CardTitle>
        //             </CardHeader>
        //             <CardContent>
        //                 <div className="grid gap-6">
        //                     <div className="grid gap-3">
        //                         <Label htmlFor="status">Status</Label>
        //                         <Select>
        //                             <SelectTrigger id="status" aria-label="Select status">
        //                                 <SelectValue placeholder="Select status" />
        //                             </SelectTrigger>
        //                             <SelectContent>
        //                                 <SelectItem value="draft">Draft</SelectItem>
        //                                 <SelectItem value="published">Active</SelectItem>
        //                                 <SelectItem value="archived">Archived</SelectItem>
        //                             </SelectContent>
        //                         </Select>
        //                     </div>
        //                 </div>
        //             </CardContent>
        //         </Card>
        //     
        //        
        //     </div>
        // </div>
        <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                    Enter the product name and key features that describe your product.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            className="w-full"
                            defaultValue="Gamer Gear Pro Controller"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                            className="min-h-32"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="description">Features</Label>
                        <Textarea
                            id="description"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                            className="min-h-32"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductDetail