import { Timestamp, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { db } from '~/firebase';
import { savePostsList } from '~/redux/reduxData/postsList';
import AvatarImage from '../../Avatar/Avatar';
import PopperWrapper from '../../Popper/Popperwrapper';

import './ToastAddFriends.scss'
import { CloseIcon } from '~/Asset';
import { CloseIcon05 } from '~/Asset/IconNews/Icon05';
const Msg = ({ closeToast, toastProps }) => (
    <div className='notification-add-friend'>
        {/* <PopperWrapper> */}
        <div className='notification-items'>
            <div className='notification-item notification-top'>
                <span>Thông báo mới</span>
                <span
                    className='btn-close-notification'
                    onClick={closeToast}
                >
                    {CloseIcon05}
                </span>
            </div>
            <div className='notification-item notification-content'>
                <div className="notification-image">
                    <AvatarImage src='https://i.pinimg.com/236x/06/59/5b/06595be64b1cc8c603aac2d18e7a9a62.jpg' width={'76px'} height={'76px'} />
                </div>
                <div className="notification-title">
                    <span>
                        <b>Nguyễn Văn Đông</b> đã gửi cho bạn lời mời kết bạn.
                    </span>
                    <span>vài giây trước</span>
                    <div className=" notification-button">
                        <span>
                            Xác nhận
                        </span>
                        <span>
                            Xoá
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* </PopperWrapper> */}
    </div>
)

export const ToastAddFriends = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [listToast, setListToast] = useState()
    // console.log(23, currentUser.uid)
    const { currentUser } = useContext(AuthContext)
    const listPost = useSelector((state) => state.listPost)
    const date = Timestamp.now()
    useEffect(() => {
        setTimeout(() => {
            const unSub = onSnapshot(doc(db, 'users', '4sGUBZ9zb0YRS2vikI6EJAoNbI22'), (doc) => {
                // dispatch(savePostsList(doc.data().NewsPost));
                setData(doc.data())
                // setDataPosts(doc.data().NewsPost);
                // setLoading(uuid());   
            });
            return () => {
                unSub();
            };
        }, 0)
    }, []);

    const displayMsg = () => {
        toast(<Msg />)
    }

    console.log(56, data)
    data && data?.ListAddFriend?.map((item) => {
        if (item.uid === currentUser.uid) {
            return toast(<Msg />)
        }
    })

    const handleDeletePosts = async () => {
        // const newPostsList = postsList.filter((item) => {
        //     return item.postsId !== items.postsId
        // })
        // await updateDoc(doc(db, "testUpdatePosts", '514818e6-2088-4773-8b53-a6533258d31e'), {
        //     NewsPost: newPostsList
        // });
    }

    console.log(70, date)

    const addFriends = async () => {
        await updateDoc(doc(db, "users", '4sGUBZ9zb0YRS2vikI6EJAoNbI22'), {
            ...data,
            ListAddFriend: [
                {
                    uid: data.uid,
                    isNew: true,
                    date: Timestamp.now(),
                }
            ]
        });
    }

    const Unfriend = async () => {
        await updateDoc(doc(db, "users", '4sGUBZ9zb0YRS2vikI6EJAoNbI22'), {
            ...data,
            ListAddFriend: [
                // {
                //     uid: data.uid,
                //     isNew: true,
                //     date: Timestamp.now(),
                // }
            ]
        });
    }

    return (
        <div>
            <button onClick={addFriends}>Click me</button>
            <button onClick={Unfriend}>Unfriend</button>
            <div>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                // closeOnClick
                rtl={false}
                pauseOnFocusLoss
                // draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}