import { collection, getDocs } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '~/firebase'
import { ChatContext } from '~/Pages/Messages/context/ChatContext'
import './BoxChat.scss'
import BoxChatItem from './BoxChatItem/BoxChatItem'

let listChat = []
function BoxChat() {
    const { data } = useContext(ChatContext)
    const [listChats, setListChats] = useState([])
    useEffect(() => {
        listChat.find(e => e.chatId === data.chatId) === undefined && listChat.unshift(data)
        // listChat.find((e) => e.chatId )
        setListChats(listChat)
        // console.log(listChat);
    }, [data])
    // const [listChats, setListChats] = useState([]);
    // const gameCollection = collection(db, 'chats');
    // useEffect(() => {
    //     const getChats = async () => {
    //         const data = await getDocs(gameCollection);
    //         setListChats(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getChats();
    // }, []);
    return (
        <div className='box-chat-wrapper'>
            <div className='box-chat-items'>
                {listChats.map((item) => (
                    item.chatId !== 'null' && <BoxChatItem data={item} />
                ))}
        </div>
            </div>

    )
}

export default BoxChat
