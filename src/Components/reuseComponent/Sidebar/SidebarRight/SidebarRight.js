import { useContext, useEffect, useState } from 'react';
import { ListFriends } from '../../List/List';
import AvatarUser from '../../Avatar/User/AvatarUser';
import './SidebarRight.scss';
import { BoxGiftsIcon, LiveIcon2, LoudspeakerIcon, SearchIcon, SwitchPageIcon } from '~/Asset';
import { db } from '~/firebase';
import { collection, doc, getDoc, getDocs, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { ChatContext } from '~/Pages/Messages/context/ChatContext';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '~/redux/reduxData/items';
import { v4 as uuid } from 'uuid';
import { ListUserChat } from './ListUserChat';
export const ApiUrl = 'https://6397f76c86d04c7633a1c4d5.mockapi.io/facebook';

function SidebarRight() {
    const [messages, setMessages] = useState([]);
    // const [user, setUser] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const dispatch = useDispatch();
    var checkId = false;

    return (
        <div className="sidebar-right-wrapper">
            <div className="sidebar-right-items" key={uuid()}>
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
                        </ul>
                    </div>
                </div>
                <ListUserChat />
            </div>
        </div>
    );
}
export default SidebarRight;
