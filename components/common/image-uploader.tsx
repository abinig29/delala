import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { axiosAuth } from '@/lib/axiosConfig';
import useImageUploader from '@/hooks/use-image';
import { Icons } from './icons';
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
    const Upload = <div
        {...getRootProps({
            className: "cursor-pointer"
        })}
    >
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center gap-4'>
            <Icons.upload size={14} />
        </div>
    </div>

    return (
        <div>
            {!image && (
                <div
                    {...getRootProps({
                        className: "border border-black w-16 h-16 grid place-content-center  cursor-pointer rounded-full"
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
                image && <div className=' w-16 h-16  relative'>
                    <Image
                        width={600}
                        height={600}
                        src={normalizeUrl(image)}
                        alt=""
                        className='w-full h-full object-cover overflow-hidden  rounded-full border border-black/80'
                    />
                    <button
                        type='button'
                        className=' absolute top-0 right-0 flex justify-center items-center  transition-colors z-[10] bg-white rounded-full p-1'
                        onClick={() => { }}
                    >
                        {Upload}
                    </button>
                </div>
            }
        </div>
    );
};

export default PhotoUploader;
