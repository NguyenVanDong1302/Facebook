import { collection, getDocs } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '~/firebase'
import { ChatContext } from '~/Pages/Messages/context/ChatContext'
import './BoxChat.scss'
import BoxChatItem from './BoxChatItem/BoxChatItem'
import { useSelector } from 'react-redux'

function BoxChat() {
    const items = useSelector((state) => state.items);
    return (
        <div className='box-chat-wrapper'>
            <div className='box-chat-items'>
                {items.length > 0 && items.map((item) => (
                    item.chatId !== 'null' && <BoxChatItem data={item} key={item.chatId} />
                ))}
            </div>
        </div>

    )
}

export default BoxChat
