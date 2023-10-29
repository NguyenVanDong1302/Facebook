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
    const { currentUser } = useContext(AuthContext)
    useEffect(() => {
        setTimeout(() => {
            const unSub = onSnapshot(doc(db, 'users', currentUser?.uid), (doc) => {
                setData(doc.data())
            });
            return () => {
                unSub();
            };
        }, 0)
    }, []);


    useEffect(() => {
        data && data?.ListAddFriend?.map((item) => {
            const nowDate = new Date()
            const nowDateSeconds = nowDate.getTime() / 1000
            const difference = (-item.date.seconds + nowDateSeconds) / 60
            console.log(84, difference)
            if (item.uid === currentUser.uid && difference < 0.1) {
                return toast(<Msg />)
            }
        })
    }, [data])

    return (
        <div>
            {/* <button onClick={addFriends}>Click me</button> */}
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
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