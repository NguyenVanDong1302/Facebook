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


function AddPosts() {
    let Typefile;
    const { currentUser } = useContext(AuthContext)
    const [checkFile, setCheckFile] = useState()
    const [range, setRange] = useState(0)
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        // console.log('check submit');
        // const Typefile = handleCheckTypeFile().value
        // e.preventDefault();
        const textContent = document.querySelector('.input-text-posts').innerHTML
        const postsCollectionRef = collection(db, 'posts-home');
        console.log(37, currentUser)
        if (textContent !== '') {
            // if (checkFile === undefined) {
            //     // await updateDoc(doc(db, "testUpdatePosts", '514818e6-2088-4773-8b53-a6533258d31e'), {
            //     //     NewsPost: arrayUnion({
            //     //         postsId: uuid(),
            //     //         textContent,
            //     //         usrPosts: currentUser.uid,
            //     //         date: Timestamp.now(),
            //     //     })
            //     // });
            //     // const createUser = async() = > {

            //     await addDoc(postsCollectionRef, {
            //         postsId: uuid(),
            //         textContent,
            //         usrPosts: currentUser.uid,
            //         displayName: currentUser.displayName,
            //         photoUrl: currentUser.photoURL,
            //         date: Timestamp.now(),
            //         interact: []
            //     });
            //     await dispatch(saveLoadingId(uuid()))

            // } else {
            //     const file = checkFile.type.startsWith('video/')
            //     const storageRef = file ? ref(storage, `videos/${checkFile.name}`) : ref(storage, uuid());
            //     const uploadTask = uploadBytesResumable(storageRef, checkFile, checkFile.type);
            //     setCheckFile(null)
            //     uploadTask.on('state_changed',
            //         (snapshot) => {
            //             // Observe state change events such as progress, pause, and resume
            //             // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            //             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //             setRange(progress)
            //         },
            //         (error) => {
            //         },

            //         () => {
            //             getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //                 file ?
            //                     await addDoc(postsCollectionRef, {
            //                         postsId: uuid(),
            //                         textContent,
            //                         usrPosts: currentUser.uid,
            //                         date: Timestamp.now(),
            //                         video: downloadURL,
            //         displayName: currentUser.displayName,
            //         photoUrl: currentUser.photoURL,
            //                         interact: []
            //                     })
            //                     :
            //                     await addDoc(postsCollectionRef, {
            //                         postsId: uuid(),
            //                         textContent,
            //                         usrPosts: currentUser.uid,
            //                         date: Timestamp.now(),
            //                         img: downloadURL,
            //         displayName: currentUser.displayName,
            //         photoUrl: currentUser.photoURL,
            //                         interact: []
            //                     })
            //                 await dispatch(saveLoadingId(uuid()))
            //             });

            //         }
            //     );
            // }
        }
    }
    const CheckFile = (e) => {
        setCheckFile(e)
    }
    // const reader = new FileReader();
    // reader.addEventListener('load', () => {
    //     if (reader.result.startsWith('data:image/')) {
    //         TypeofFile = 'image'
    //     } else if (reader.result.startsWith('data:video/')) {
    //         TypeofFile = 'video'
    //     } else {
    //         // console.log('File không hợp lệ');
    //     }
    // });


    return (
        <div className='add-posts-wrapper'>
            <PopperWrapper>
                <span className='add-posts__title'>TẠO BÀI VIẾT</span>
                <div className='add-posts__header'>
                    <AvatarImage
                        className={('border-avatar-user')}
                        src={currentUser?.photoURL}
                    />
                    <div className='add-posts__header__title'>
                        <span className='add-posts__name__user'>{currentUser.displayName}</span>
                        <span className='object__posts'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/qop9rFQ_Ys1.png" alt="Công khai" height="12" width="12" />
                            Công khai
                            <ArrowIcon />
                        </span>
                    </div>
                    {/* <div className="range">
                        <input type="range" value={range} min={0} max={100} />
                    </div> */}
                    <div className="">
                        <input className='input-text-posts' type="text" />
                    </div>
                </div>
                {/* <Video /> */}
                <div className='add-posts-input'>
                    <InputPosts checkFile={CheckFile} />
                    <button
                        className='button__upload__posts'
                        onClick={handleSubmit}
                    // disabled
                    >
                        Đăng
                    </button>
                </div>
            </PopperWrapper >
        </div >
    );
}

export default AddPosts;
