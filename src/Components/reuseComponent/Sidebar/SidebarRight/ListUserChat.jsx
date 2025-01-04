import { collection, doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { db } from '~/firebase';
import { v4 as uuid } from 'uuid';
import AvatarUser from '../../Avatar/User/AvatarUser';
import { useDispatch, useSelector } from 'react-redux';
import { ChatContext } from '~/Pages/Messages/context/ChatContext';
import { addItem } from '~/redux/reduxData/items';
export const ListUserChat = () => {
    const [listUser, setListUser] = useState([]);
    const usersCollectionRef = collection(db, 'users');
    const { currentUser } = useContext(AuthContext);
    const items = useSelector((state) => state.items);
    const { data } = useContext(ChatContext);
    const dispatch = useDispatch();
    var checkId = false;

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            const dataGeted = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((item) => {
                return item.uid !== currentUser.uid
            })
            setListUser(dataGeted);
        };
        getUsers();
    }, []);

    const handleSelect = async (user) => {
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, 'chats', combinedId));
            if (!res.exists()) {
                await setDoc(doc(db, 'chats', combinedId), { messages: [] });
                await updateDoc(doc(db, 'userChats', currentUser.uid), {
                    [combinedId + '.userInfo']: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + '.date']: serverTimestamp(),
                });
                await updateDoc(doc(db, 'userChats', user.uid), {
                    [combinedId + '.userInfo']: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + '.date']: serverTimestamp(),
                });
            }
        } catch (err) { }

        items.forEach(function (obj) {
            if (obj.chatId === combinedId) {
                checkId = true;
            }
        });
        if (!checkId) {
            dispatch(
                addItem({
                    ...user,
                    chatId: combinedId,
                }),
            );
            checkId = false;
        }

    };

    const showListUserChat = listUser.map((item) => {
        return <div className="tag-user" key={item.id} onClick={() => handleSelect(item)}>
            <AvatarUser
                src={item.photoURL}
                alt={item.displayName}
                online={true}
            />
            <span className="tag-user__name span-title">{item.displayName}</span>
        </div>
    })

    return (
        <div className="tag-user__menu__list__user" key={uuid()}>
            {showListUserChat}
        </div>
    )
}
