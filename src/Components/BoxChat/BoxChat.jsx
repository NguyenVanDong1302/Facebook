import { collection, getDocs } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '~/firebase'
import { ChatContext } from '~/Pages/Messages/context/ChatContext'
import './BoxChat.scss'
import BoxChatItem from './BoxChatItem/BoxChatItem'
import { useSelector } from 'react-redux'

let listChat = []
function BoxChat() {
    const [listChats, setListChats] = useState([])
    const items = useSelector((state) => state.items);
    // useEffect(() => {
    //     listChat.find(e => e.chatId === data.chatId) === undefined && listChat.unshift(data)
    //     // listChat.find((e) => e.chatId )
    //     setListChats(listChat)
    // }, [data])
    // const [listChats, setListChats] = useState([]);
    // const gameCollection = collection(db, 'chats');
    // useEffect(() => {
    //     const getChats = async () => {
    //         const data = await getDocs(gameCollection);
    //         setListChats(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getChats();
    // }, []);
    console.log(27, items)
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
