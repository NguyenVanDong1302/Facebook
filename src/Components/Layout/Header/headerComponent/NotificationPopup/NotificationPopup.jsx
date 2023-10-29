import React from 'react'
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper';
import NotiAddFriends from './NotiAddFriends';
import './Notification.scss'
import { NotiInteract } from './NotiInteract';

export const NotificationPopup = ({ children }) => {
    const RenderResult = (attrs, instance) => {
        return <div className='notification-contents-wrapper'>
            <PopperWrapper>
                <div className="noti-contents-container">
                    <div className="noti-title">
                        <h2>Thông báo</h2>
                    </div>
                    <div className="noti-contents-items">
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
                    </div>
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

