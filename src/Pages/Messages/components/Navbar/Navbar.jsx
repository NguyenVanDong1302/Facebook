import React, { useContext, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth, db } from '~/firebase'
import { AuthContext } from '../../context/AuthContext'
import { DotHorizontal2Icon, NewChatIcon, ZoomIcon2 } from '~/Asset'
import Input from '~/Components/reuseComponent/Input/FormInput'
import './Navbar.scss'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser'

function Navbar() {
  const [userName, setUserName] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', userName));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      setErr(true)
    }
  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid :
      user.uid + currentUser.uid
    try {
      const res = await getDoc(doc(db, 'chats', combinedId))
      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combinedId), { messages: [] })

        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        })
        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        })
      }
    } catch (err) { }

    setUser(null)
    setUserName("")
  }
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='navbar'>
      <div className='navbar__header'>
        <div className='navbar__left'>
          <h1 className='navbar__left__title'>
            Chat
          </h1>
        </div>
        <div className='navbar__right'>
          <ul>
            <li>
              <DotHorizontal2Icon />
            </li>
            <li>
              <ZoomIcon2 />
            </li>
            <li>
              <NewChatIcon />
            </li>
          </ul >
        </div >
      </div>
      <div className='navbar__content'>
        <div className='search'>
          <div className="searchForm">
            <Input onKeyDown={handleKey}
              onChange={e => setUserName(e.target.value)}
              value={userName} placeholder='Tìm kiếm trên Messages' className='search__input' />
          </div>
          {err && <span>User not found !</span>}
          {user && user.uid !== currentUser.uid &&
            <div className="userChat"
            onClick={handleSelect} 
            >
              <AvatarUser online={true} src={user.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{user.displayName}</span>
              </div>
            </div>}
        </div>
      </div>
    </div >
  )
}

export default Navbar
