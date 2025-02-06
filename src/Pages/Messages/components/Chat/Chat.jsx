import React, { useContext } from 'react'
import Messages from './Message/Messages'
import Input, { InputMessage } from './Message/InputMessage'
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
    return (

        <div className='chat-wrapper'>
            {
                data &&
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

                {data.user.uid && <InputMessage />}
                </div>
            }
            <DetailUser data={data} />
        </div>
    )
}

export default Chat
