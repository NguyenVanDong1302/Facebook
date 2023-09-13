import { useContext, useEffect, useState } from 'react';
import { ListFriends } from '../../List/List';
import AvatarUser from '../../Avatar/User/AvatarUser';
import './SidebarRight.scss';
import {
    BoxGiftsIcon,
    DotHorizontalIcon,
    LiveIcon2,
    LoudspeakerIcon,
    MessengerIcon2,
    SearchIcon,
    SwitchPageIcon,
} from '~/Asset';
import { db } from '~/firebase';
import { collection, doc, getDoc, getDocs, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { ChatContext } from '~/Pages/Messages/context/ChatContext';

export const ApiUrl = 'https://6397f76c86d04c7633a1c4d5.mockapi.io/facebook';

function SidebarRight() {
    const [messages, setMessages] = useState([]);
    // const [user, setUser] = useState(null);
    const [listUser, setListUser] = useState([]);
    const usersCollectionRef = collection(db, 'users');
    const pages = 'home';
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
    const { data } = useContext(ChatContext);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setListUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    const handleSelect = async (user) => {
        console.log(user);
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
        } catch (err) {}

        dispatch({ type: 'CHANGE_USER', payload: user });

        console.log((combinedId));
        // setUserName('');
        const find = document.querySelector(`.${combinedId}`);
        find.classList.toggle('close-box-chat');
    };

    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });
        return () => {
            unSub();
        };
    }, [data.chatId]);

    return (
        <div className="sidebar-right-wrapper">
            <div className="sidebar-right-items">
                <div className="tag-sponsor sidebar-right-item">
                    <span className="span-title">Được tài trợ</span>
                </div>
                <div className="tag-fan-page-user sidebar-right-item">
                    <div className="fan-page__header">
                        <span className="span-title fan-page__header_title">Trang và trang cá nhân của bạn</span>
                        <span className="fan-page__header_icon">
                            <DotHorizontalIcon />{' '}
                        </span>
                    </div>
                    <div className="tag-user fan-page-tag-user">
                        <AvatarUser
                            src="https://github.com/NguyenVanDong1302/facebook-ui/blob/main/src/Asset/Image/AvatarPage/id01.jpg?raw=true"
                            alt="Avatar-my-pages"
                        />
                        <span className="tag-user__name span-title">Nguyễn Văn Đông</span>
                    </div>
                    <div className="fan-page-feature">
                        <ul>
                            <li>
                                <MessengerIcon2 />
                                <span>4 Tin nhắn</span>
                            </li>
                            <li>
                                <SwitchPageIcon />
                                <span> Chuyển sang Trang</span>
                            </li>
                            <li>
                                <LoudspeakerIcon />
                                <span> Tạo quảng cáo</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tag-birthday sidebar-right-item">
                    <span className="tag-birthday__header span-title">Sinh nhật</span>
                    <div className="tag-birthday__content">
                        <BoxGiftsIcon />
                        <span className="tag-birthday__content__title">
                            Hôm nay là sinh nhật của <strong className="name__user__birthday"> Thịi Lệ </strong>
                        </span>
                    </div>
                </div>
                <div className="tag-user__menu sidebar-right-item">
                    <div className="tag-user__menu__header">
                        <span className="span-title tag-user__title"> Người liên hệ </span>
                        <ul>
                            <li>
                                <LiveIcon2 />
                            </li>
                            <li>
                                <SearchIcon />
                            </li>
                            <li>
                                <DotHorizontalIcon />
                            </li>
                        </ul>
                    </div>
                    <div className="tag-user__menu__list__user">
                        {listUser.map((item, index) => {
                            return (
                                <>
                                    {currentUser.uid !== item.uid && (
                                        <div className="tag-user" key={index} onClick={() => handleSelect(item)}>
                                            <AvatarUser src={item.photoURL} alt={item.displayName} online={true} />
                                            <span className="tag-user__name span-title">{item.displayName}</span>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SidebarRight;
