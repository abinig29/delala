import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Upload } from 'lucide-react'
const ProductImage = () => {
    return (
        <Card
            x-chunk="dashboard-07-chunk-4"
        >
            <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                    Upload  images that best showcase your product from different angles.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <img
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        src="/6.png"
                    />
                    <div className="grid grid-cols-3 gap-2">
                        <button>
                            <img
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                src="/4.png"
                            />
                        </button>
                        <button>
                            <img
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                src="/6.png"
                            />
                        </button>
                        <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductImage