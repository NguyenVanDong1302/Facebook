import React, { useContext, useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper';
import NotiAddFriends from './NotiAddFriends';
import './Notification.scss'
import { NotiInteract } from './NotiInteract';
import { doc, onSnapshot, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '~/firebase';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { v4 as uuid } from "uuid";

export const NotificationPopup = ({ children }) => {
    const { currentUser } = useContext(AuthContext)
    const [listNoti, setListNoti] = useState([])
    useEffect(() => {
        // const unsub = onSnapshot(doc(db, "notificationPosts", currentUser.uid + "notificationPosts"), (doc) => {
        //     const t = doc.data();
        //     setListNoti(t)
        // });

        const unsub2 = onSnapshot(doc(db, "notificationPosts", currentUser.uid + "notificationPosts"), (doc) => {
            const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
            const customArray = Object.entries(doc.data()).map(([key, value]) => {
                return { key, value }; // Tạo đối tượng mới
            });
            console.log(source, " data: ", customArray);
        });
        // console.log(listNoti);

    }, [])


    const RenderResult = (attrs, instance) => {
        return <div className='notification-contents-wrapper'>
            <PopperWrapper>
                <div className="noti-contents-container">
                    <button>
                        add notifi
                    </button>
                    <div className="noti-title">
                        <h2>Thông báo</h2>
                    </div>
                    {/* <div className="noti-contents-items">
                        <div className="noti-contents-item">
                            <NotiAddFriends />
                        </div>
                        <div className="noti-contents-item">
                            <NotiInteract />
                        </div>
                        <div className="noti-contents-item">
                            <NotiInteract />
                        </div>
                        <div className="noti-contents-item">
                            <NotiInteract />
                        </div>
                        <div className="noti-contents-item">
                            <NotiInteract />
                        </div>
                        <div className="noti-contents-item">
                            <NotiInteract />
                        </div>
                        <div className="noti-contents-item">
                            <NotiInteract />
                        </div>
                    </div> */}
                </div>
            </PopperWrapper>
        </div>
    }
    return (
        <div>
            <Tippy
                // visible
                interactive
                placement='bottom-end'
                trigger="click"
                delay={[100, 200]}
                // hideOnClick='true'
                onHide={(instance) => {
                    requestAnimationFrame(instance.unmount);
                }}
                render={RenderResult}
            >
                {children}
            </Tippy>
        </div>
    )
}

