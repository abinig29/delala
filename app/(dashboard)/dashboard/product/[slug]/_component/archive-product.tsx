import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'

const ArchiveProduct = ({ isCreate = true }: { isCreate?: boolean }) => {
    return (
        <Card x-chunk="dashboard-07-chunk-5">
            <CardHeader>
                <CardTitle>Archive Product</CardTitle>
                <CardDescription>
                    Move the product to the archive to hide it from your active listings.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div></div>
                <Button
                    disabled={isCreate}
                    size="sm"
                    variant="destructive"
                    className='bg-red-500'
                >
                    Archive Product
                </Button>
            </CardContent>
        </Card>
    )
}

export default ArchiveProduct