"use client"
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from 'lucide-react'
import { Label } from '@/components/ui/label'
import PhotoUploader from '@/app/(dashboard)/dashboard/product/[slug]/_component/image-uploader'

export default function ProductModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [images, setImages] = useState<string[]>([])

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button className="bg-main  text-white px-4 py-2 rounded flex items-center space-x-1 hover:bg-main/80 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Post Product</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Product</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Phone" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="description" rows={5} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                            <SelectTrigger id="category">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="electronics">Electronics</SelectItem>
                                <SelectItem value="clothing">Clothing</SelectItem>
                                <SelectItem value="books">Books</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2 ">
                        <Label>Product Image</Label>
                        <div className="grid grid-cols-4 gap-2 h-20">
                            <PhotoUploader
                                image={images?.[0]}
                                setImage={(newImage) => { }}
                            />
                            <PhotoUploader
                                image={images?.[1]}
                                setImage={(newImage) => { }}
                            />
                            <PhotoUploader
                                image={images?.[2]}
                                setImage={(newImage) => { }}
                            />
                            <PhotoUploader
                                image={images?.[2]}
                                setImage={(newImage) => { }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button
                        className=' bg-main hover:bg-main/60'
                        onClick={() => setIsOpen(false)}>Save Product</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}