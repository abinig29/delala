import { useState } from 'react';
import axiosCon from 'axios';
import { axiosAuth } from '@/lib/axiosConfig';

const useImageUploader = () => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const uploadImage = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            setUploading(true);
            setError(null);
            const response = await axiosAuth.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const imageUrl = response.data.url;
            return imageUrl; // Return the uploaded image URL
        } catch (error) {
            console.error('Error uploading the image:', error);
            setError('Failed to upload image.');
            return null;
        } finally {
            setUploading(false);
        }
    };

    return {
        uploadImage,
        uploading,
        error
    };
};

export default useImageUploader;
