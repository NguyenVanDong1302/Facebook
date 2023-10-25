import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { CallIconMessages, CloseIconBlue, VideoCallIconMessages } from '~/Asset'
import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser'
import { db } from '~/firebase'
import Input, { InputMessage } from '~/Pages/Messages/components/Chat/Message/InputMessage'
import Message from '~/Pages/Messages/components/Chat/Message/Message'
import { ChatContext } from '~/Pages/Messages/context/ChatContext'
import './BoxChatItem.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '~/redux/reduxData/items'
import { v4 as uuid } from 'uuid';
function BoxChatItem({ data }) {
  // const { data } = useContext(ChatContext)
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
      unSub()
    }
  }, [data.chatId])
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(removeItem(data.chatId));
  }

  const handleShowChat = () => {
    return (
      <div className="messages">
        {messages.map((m, index, array) => {
          if (index > 0) {
            const previousValue = array[index - 1];
            const CompTime = (m.date.seconds - previousValue.date.seconds) / 60 > 5
            var CheckTimeSend = CompTime === true ? m.date.seconds : undefined
            var CheckShowAvt = m.senderId === previousValue.senderId ? false : true
          }
          return <Message message={m} key={m.id}
            CheckTimeSend={CheckTimeSend}
            CheckShowAvt={CheckShowAvt}
          />
        }
        )}
      </div>
    )
  }

  return (
    <>
      {
        data.chatId !== 'null' && <div className={`box-chat-item-wrapper ${data.chatId}`}>
          <div className='box-chat-item-items'>
            <div className='box-chat-item__header'>
              <div className='bci__header__left'>
                <AvatarUser className='bci__hl__avatar' online={true} src={data.photoURL} />
                <span className='bci__hl__detail'>
                  <span>{data?.displayName}</span>
                  <p>đang hoạt động</p>
                </span>
              </div>
              <div className='bci__header__right'>
                <ul>
                  <li>
                    <CallIconMessages size='26px' />
                  </li>
                  <li>
                    <VideoCallIconMessages size='26px' />
                  </li>
                  <li onClick={handleClose}>
                    <CloseIconBlue />
                  </li>
                </ul>
              </div>
            </div>
            <div className='box-chat-item__chat'>
              {handleShowChat()}
            </div>
            {data.uid && <InputMessage className={'box-chat__input'} chatId={data.chatId} />}
          </div>
        </div >
      }
    </>
  )
}

export default BoxChatItem
