/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from 'react';
import { CloseIcon, DotHorizontal2Icon } from '~/Asset';
import { EventIconPosts, FaceIconPosts, GPSIconPosts, TagFriendsIconPosts, UploadFileIconPosts, UploadImageIconPosts } from '~/Asset/Posts';
import './InputPosts.scss'
import { AuthContext } from '~/Pages/Messages/context/AuthContext';

function InputPosts() {
    const [file, setFile] = useState(null);
    const [previewImgSrc, setPreviewImgSrc] = useState(null);
    const [posterImgSrc, setPosterImgSrc] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
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
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                setPosterImgSrc(canvas.toDataURL('image/jpeg'));
                URL.revokeObjectURL(video.src);
            });
        }
    };

    const handleCancelClick = () => {
        setFile(null);
        setPreviewImgSrc(null);
        setPosterImgSrc(null);
    };

    const displayUploadFile = () => {
        // const check = document.querySelector('.add-posts__upload__file')
        document.querySelector('.add-posts__upload__file').classList.toggle('d-none')
    }

    const handleDisplayButton = () => {
        const CheckInput = document.querySelector('.input-text-posts')
        let ToggleDisabled = document.querySelector('.button__upload__posts')
        let i = CheckInput.innerHTML.length
        if (i === 0) {
            ToggleDisabled.disabled = true;
        }
        else if (i > 0) {
            ToggleDisabled.disabled = false;
        }
    }
    return (
        <div className='add-posts__input'>
            <span
                contentEditable="true" id="new-tag"
                className="badge alert-info input-text-posts"
                data-focused-advice="Start typing"
                onKeyUp={handleDisplayButton}
            ></span>
            <span className="badge input_content_posts" contentEditable={true}>
                <>
                    <style>
                        {`
                    span.badge[contentEditable]:empty::before {
                    content: "${currentUser.displayName} ơi, bạn đang nghĩ gì thế?";
                    font-weight: 500;
                    }
                     `}
                    </style>
                </>
            </span>

            {file ? (
                <div className="preview-container">
                    {file.type.startsWith('video/') ? (
                        <div className='review-upload-file-wrapper d-flex-1'>
                            <video id="preview-video" src={URL.createObjectURL(file)} poster={posterImgSrc} controls />
                            <span className='btn-remove-file d-flex-1' onClick={handleCancelClick}><CloseIcon /></span>
                        </div>
                    ) : (
                        <div className='review-upload-file-wrapper d-flex-1'>
                            <img id="preview-img" src={previewImgSrc} alt="Preview Image" />
                            <span className='btn-remove-file d-flex-1' onClick={handleCancelClick}><CloseIcon /></span>
                        </div>
                    )}
                </div>
            ) : (
                <div className="add-posts__upload__file d-none d-flex-1">
                    <div className='d-flex-1'>
                        <input
                            style={{ display: "none" }}
                            type="file" id="file-input"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="file-input" className='d-flex-1'  >
                            <span className='d-flex-1 input-file__icon icon__40px'><UploadFileIconPosts /></span>
                            <span className='ap__feature__title d-flex-1 input-file__title '>Thêm ảnh/video</span>
                        </label>
                    </div>
                </div>
            )}
            <div className="add-posts__feature d-flex-2">
                <span className='ap__feature__title d-flex-1'>Thêm vào bài viết của bạn</span>
                <ul className='d-flex-1'>
                    <li className='d-flex-1' onClick={displayUploadFile}>
                        <UploadImageIconPosts />
                    </li>
                    <li className='d-flex-1'>
                        <TagFriendsIconPosts />
                    </li>
                    <li className='d-flex-1'>
                        <FaceIconPosts />
                    </li>
                    <li className='d-flex-1'>
                        <GPSIconPosts />
                    </li>
                    <li className='d-flex-1'>
                        <EventIconPosts />
                    </li>
                    <li className='d-flex-1'>
                        <DotHorizontal2Icon />
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default InputPosts;
