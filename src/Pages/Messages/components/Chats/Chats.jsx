import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "~/firebase";
import './Chats.scss'
import AvatarUser from "~/Components/reuseComponent/Avatar/User/AvatarUser";
import ShowTime from "~/Components/reuseComponent/ShowTime/ShowTime";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  const now = new Date();
  const secondNow = now.getTime() / 1000


  return (
    <div className="chats">
      {chats !== undefined && Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => {
        const senderId = chat[1].lastMessage?.senderId
        const userId = currentUser.uid
        let showText = ''
        const lastMess = chat[1].lastMessage?.text === "" ? showText = "đã gửi một tin nhắn" : showText = chat[1].lastMessage?.text
        const secondSend = chat[1].date?.seconds
        // console.log(secondSend)
        const HandleTimeSend = () => {
          const timeSend = (secondNow - secondSend) / 60
          // if (timeSend < 1) {
          //   return 'vài giây trước'
          // } else if (timeSend / 60 > 24) {
          //   return Math.round(timeSend / 60 / 24) + ' ngày trước'
          // } else if (timeSend > 60) {
          //   return Math.round(timeSend / 60) + ' giờ trước trước'
          // }
          // console.log(53, timeSend) 
          // return
        }
        const showTimeSend = HandleTimeSend()
        console.log()
        return (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <AvatarUser online={true} className='userChat__avatar' src={chat[1].userInfo.photoURL} alt="" height="56px" width="56px" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p className="userChat__last__messages">
                {senderId === userId ? 'Bạn: ' : ''}
                {lastMess === true && senderId !== userId ?
                  chat[1].userInfo.displayName + "đã gửi cho bạn một tin nhắn" :
                  showText}
                <span>·</span>
                <span>
                  <ShowTime datePosts={secondSend} />
                </span>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Chats;