import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { CallIconMessages, CloseIconBlue, VideoCallIconMessages } from '~/Asset'
import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser'
import { db } from '~/firebase'
import Input from '~/Pages/Messages/components/Chat/Message/Input'
import Message from '~/Pages/Messages/components/Chat/Message/Message'
import { ChatContext } from '~/Pages/Messages/context/ChatContext'
import './BoxChatItem.scss'
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

  const handleClose = () => {
    const find = document.querySelector(`.${data.chatId}`)
    find.classList.toggle('close-box-chat')
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
        data.chatId !== 'null' && <div className={`box-chat-item-wrapper ${data.chatId} close-box-chat`}>
          <div className='box-chat-item-items'>
            <div className='box-chat-item__header'>
              <div className='bci__header__left'>
                <AvatarUser className='bci__hl__avatar' online={true} src='https://firebasestorage.googleapis.com/v0/b/facebook-ui-6f536.appspot.com/o/2558017d-a392-41b1-a724-d828bc9cf057?alt=media&token=3a82e0b8-502c-4916-8c32-f4aca0163123' />
                <span className='bci__hl__detail'>
                  <span>{data.user?.displayName}</span>
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
            {data.user.uid && <Input className={'box-chat__input'} />}
          </div>
        </div >
      }
    </>
  )
}

export default BoxChatItem
