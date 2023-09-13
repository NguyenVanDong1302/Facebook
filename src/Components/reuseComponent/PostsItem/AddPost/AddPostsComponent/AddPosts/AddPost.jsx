/* eslint-disable jsx-a11y/img-redundant-alt */
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
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
import ReviewFile from './Reivew/InputPosts';
import InputPosts from './Reivew/InputPosts';

function AddPosts() {
    let Typefile;
    const { currentUser } = useContext(AuthContext)
    const [checkFile, setCheckFile] = useState('')

    const handleSubmit = async () => {
        // console.log('check submit');
        // const Typefile = handleCheckTypeFile().value
        console.log(Typefile);
        // e.preventDefault();
        const textContent = document.querySelector('.input-text-posts').innerHTML
        // const file = e.target[0].files[0];
        // const textContent = checkText.innerHTML

        // if (file === undefined) {
        // await updateDoc(doc(db, "testUpdatePosts", '514818e6-2088-4773-8b53-a6533258d31e'), {
        //     NewsPost: arrayUnion({
        //         postsId: uuid(),
        //         textContent,
        //         usrPosts: currentUser.uid,
        //         date: Timestamp.now(),
        //     })
        // });
        // } else {

        //     const storageRef = ref(storage, uuid());
        //     const uploadTask = uploadBytesResumable(storageRef, file);
        //     uploadTask.on(
        //         (error) => {
        //         },
        //         () => {
        //             getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        //                 await updateDoc(doc(db, "testUpdatePosts", '514818e6-2088-4773-8b53-a6533258d31e'), {
        //                     NewsPost: arrayUnion({
        //                         textContent,
        //                         usrPosts: currentUser.uid,
        //                         date: Timestamp.now(),
        //                         img: downloadURL,
        //                     })
        //                 });
        //             });
        //         }
        //     );
        // }
        // checkText.innerHTML = null
    }





    // const fileInput = document.getElementById('file-input')
    // const selectedFile = fileInput.files[0];

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
                </div>
                <div className='add-posts-input'>
                    <InputPosts />
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
