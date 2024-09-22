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
import PhotoUploader from './image-uploader'
import { useFormContext } from 'react-hook-form'
import { FormDataType, FormFiledType } from '../page'


const ProductImage = () => {
    const { control, watch, setValue } = useFormContext<FormDataType>();
    const images = watch('images');

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
                    <div className="h-40">
                        <PhotoUploader
                            image={images?.[0]}
                            setImage={(newImage) => {
                                const updatedImages = [...images];
                                updatedImages[0] = newImage;
                                setValue('images', updatedImages);
                            }}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-2 h-24">
                        {
                            Array(3).fill(0).map((_, index) => {
                                return <div className='h-24'>
                                    <PhotoUploader
                                        image={images?.[index + 1]}
                                        setImage={(newImage) => {
                                            const updatedImages = [...images];
                                            updatedImages[index + 1] = newImage;
                                            setValue('images', updatedImages);
                                        }}
                                    />
                                </div>
                            })
                        }

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductImage