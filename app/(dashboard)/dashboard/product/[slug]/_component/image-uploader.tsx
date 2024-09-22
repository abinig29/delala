import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { axiosAuth } from '@/lib/axiosConfig';
import useImageUploader from '@/hooks/use-image';
import { Icons } from '@/components/common/icons';
import useSuccessToasts from '@/hooks/use-customToast';
import { normalizeUrl } from '@/lib/util/utils';
import Image from 'next/image';

export type image = File & {
    preview: string;
}

const PhotoUploader = ({ setImage, image }: { setImage: (value: any) => void, image?: string | null }) => {
    const { uploadImage, uploading, error } = useImageUploader();
    const { errorNoAction } = useSuccessToasts()

    const onDrop = useCallback(async (acceptedFiles: any) => {
        if (acceptedFiles?.length) {
            const imageUrl = await uploadImage(acceptedFiles[0]);
            console.log({ imageUrl })
            if (imageUrl) {
                setImage(imageUrl);
            }
            else if (error) errorNoAction(error as string)
        }
    }, [uploadImage, setImage]);


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'image/*': []
        },
        maxSize: 1024 * 5000,
        onDrop
    });


    return (
        <div className='h-full'>
            {!image && (
                <div
                    {...getRootProps({
                        className: " border border-dotted  border-black/80 w-full h-full grid place-content-center  cursor-pointer rounded"
                    })}
                >
                    <input {...getInputProps()} />
                    <div className='flex flex-col items-center justify-center gap-4 '>
                        {isDragActive ? (
                            <p>Drop the files here ...</p>
                        ) : (
                            <Icons.upload size={14} />
                        )}
                    </div>
                </div>
            )}
            {
                image && <div className=' w-full h-full  relative'>
                    <Image
                        width={600}
                        height={600}
                        src={normalizeUrl(image)}
                        alt=""
                        className='w-full h-full object-cover overflow-hidden  rounded'
                    />
                    <button
                        type='button'
                        className=' absolute top-1 right-1 text-white flex justify-center items-center  transition-colors z-[10] bg-red-500 rounded p-1'
                        onClick={() => setImage("")}
                    >
                        <Icons.trash size={14} />

                    </button>
                </div>
            }
        </div >
    );
};

export default PhotoUploader;
