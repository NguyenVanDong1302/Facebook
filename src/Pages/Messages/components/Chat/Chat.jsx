import React, { useContext } from 'react'
import Messages from './Message/Messages'
import Input from './Message/Input'
import { ChatContext } from '../../context/ChatContext'
import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser'

import '~/Pages/Messages/components/Chat/Chat.scss'
import { CallIconMessages, DetailIconMessages, VideoCallIconMessages } from '~/Asset'
import DetailUser from '../DetailUser/DetailUser'

function Chat() {
    const { data } = useContext(ChatContext)
    const handleDetail = () => {
        const buttonDetail = document.querySelector('.detailUser-wrapper')
        buttonDetail.classList.toggle('detailUser__toggle')
    }
    // console.log(data);
    return (
        <div className='chat-wrapper'>
            <div className='chat'>
                <div className="chatInfo">
                    {data.user.displayName ?
                        <>
                            <div className='chatInfo__info'>
                                <AvatarUser src={data.user?.photoURL} alt='avatar user' height='40px' width='40px' online={true} />
                                <div className='chatInfo__info__detail'>
                                    <span>{data.user?.displayName}</span>
                                    <span className='chatInfo__info__status'>Đang hoạt động</span>
                                </div>
                            </div>
                            <div className="chatIcons">
                                <ul>
                                    <li>
                                        <CallIconMessages />
                                    </li>

                                    <li>
                                        <VideoCallIconMessages />
                                    </li>
                                    <li onClick={handleDetail}>
                                        <DetailIconMessages />
                                    </li>
                                </ul>
                            </div>
                        </>
                        : null
                    }
                </div>
                <Messages />

                {data.user.uid && <Input />}
            </div>
            <DetailUser data={data} />
        </div>
    )
}

export default Chat
