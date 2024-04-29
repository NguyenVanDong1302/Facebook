import React, { useContext, useState } from 'react'
import { AuthContext } from '~/Pages/Messages/context/AuthContext';

export const PreviewImage = () => {

    const [file, setFile] = useState(null);
    const [previewImgSrc, setPreviewImgSrc] = useState(null);
    const [posterImgSrc, setPosterImgSrc] = useState(null);
    const { currentUser } = useContext(AuthContext);

    const [render, setRender] = useState(<></>)
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        // checkFile(selectedFile)
        setFile(selectedFile);
        const reader = new FileReader();
        reader.onload = function (e) {
            setPreviewImgSrc(e.target.result);
        };

        reader.readAsDataURL(selectedFile);
        // Get poster image from video
        if (selectedFile.type.startsWith('video/')) {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(selectedFile);
            video.addEventListener('loadedmetadata', () => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                canvas.getContext('2d').drawImage(video, 10, 20, canvas.width, canvas.height);
                setPosterImgSrc(canvas.toDataURL('image/jpeg'));
                URL.revokeObjectURL(video.src);
            });
        }
    };
    return (
        <>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <div>PreviewImage</div>
        </>
    )
}
