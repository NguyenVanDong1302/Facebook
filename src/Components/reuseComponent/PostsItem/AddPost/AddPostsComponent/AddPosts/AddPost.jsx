/* eslint-disable jsx-a11y/img-redundant-alt */
import { addDoc, arrayUnion, collection, doc, Timestamp, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { ArrowIcon, DotHorizontal2Icon, DotHorizontalIcon, FaceIcon, ImageIcon, StreamIcon } from '~/Asset';
import { db, storage } from '~/firebase';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import AvatarImage from '../../../../Avatar/Avatar';
import { v4 as uuid } from "uuid";
import './AddPosts.scss';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import ShowModal from '../../../../Modal/Modal';
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper';
import { EventIconPosts, FaceIconPosts, GPSIconPosts, TagFriendsIconPosts, UploadFileIconPosts, UploadImageIconPosts } from '~/Asset/Posts';
import { Switch } from '@mui/material';
import { Button } from 'react-bootstrap';
import Button2 from '~/Components/reuseComponent/Button/Button2/Button2';
import ReviewFile from './Review/InputPosts';
import InputPosts from './Review/InputPosts';
import { useDispatch } from 'react-redux';
import { saveLoadingId } from '~/redux/reduxData/loading';
import Video from '~/Components/reuseComponent/ThumbnailVideo.js/CheckThumbnail';
import { saveLoadAddPosts } from '~/redux/reduxData/loadAddPosts';


function AddPosts({ onClose }) {
    let Typefile;
    const { currentUser } = useContext(AuthContext)
    const [checkFile, setCheckFile] = useState()
    const [range, setRange] = useState(0)
    const dispatch = useDispatch();
    const handleSubmit = async () => {
        const textContent = document.querySelector('.input-text-posts').innerText
        const postsCollectionRef = collection(db, 'posts-home');
        onClose()
        if (checkFile === undefined && textContent !== '') {
            await dispatch(saveLoadAddPosts(true))
            await addDoc(postsCollectionRef, {
                postsId: uuid(),
                textContent,
                usrPosts: currentUser.uid,
                displayName: currentUser.displayName,
                photoUrl: currentUser.photoURL,
                date: Timestamp.now(),
                interact: []
            });
            await dispatch(saveLoadAddPosts(false))
            await dispatch(saveLoadingId(uuid()))

        } else {
            // onClose()
            await dispatch(saveLoadAddPosts(true))
            const file = checkFile.type.startsWith('video/')
            const storageRef = file ? ref(storage, `videos/${checkFile.name}`) : ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, checkFile, checkFile.type);
            setCheckFile(null)
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setRange(progress)
                },
                (error) => {
                },

                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await addDoc(postsCollectionRef, {
                            postsId: uuid(),
                            textContent,
                            usrPosts: currentUser.uid,
                            nameFile: checkFile.name,
                            typeFile: file,
                            date: Timestamp.now(),
                            fileUrl: downloadURL,
                            displayName: currentUser.displayName,
                            photoUrl: currentUser.photoURL,
                            interact: []
                        })
                        await dispatch(saveLoadAddPosts(false))
                        await dispatch(saveLoadingId(uuid()))
                    });

                }
            );
        }

    }
    const CheckFile = (e) => {
        setCheckFile(e)
    }

    return (
        <div className='add-posts-wrapper'>
            <PopperWrapper>
                <span className='add-posts__title'>TẠO BÀI VIẾT</span>
                <div className='add-posts__header'>
                    <AvatarImage
                        className='border-avatar-user'
                        src={currentUser?.photoURL}
                    />
                    <div className='add-posts__header__title'>
                        <span className='add-posts__name__user'>{currentUser.displayName}</span>
                        <span className='object__posts'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/qop9rFQ_Ys1.png" alt="Công khai" height="12" width="12" />
                            Công khai
                        </span>
                    </div>
                    <div>
                        {/* <input
                            className='input-text-posts'
                            id='input-text-posts'
                            type="text"
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)} // Cập nhật state khi nhập
                        /> */}
                    </div>
                </div>
                <div className='add-posts-input'>
                    <InputPosts checkFile={CheckFile} />
                    <button
                        className='button__upload__posts'
                        onClick={handleSubmit}
                    >
                        Đăng
                    </button>
                </div>
            </PopperWrapper>
        </div>
    );
};

export default AddPosts;
