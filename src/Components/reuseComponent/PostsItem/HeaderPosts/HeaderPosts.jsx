import { async } from '@firebase/util';
import Tippy from '@tippyjs/react/headless';
import { arrayUnion, deleteDoc, doc, Timestamp, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { CloseIcon, OptionalIcon, PenIcon2, PublicIcon } from '~/Asset';
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar';
import { db } from '~/firebase';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import ShowTime from '../../ShowTime/ShowTime';

import './HeaderPosts.scss';
import MenuPopup from '../../MenuPopup/MenuPopup';
import { IconsDots } from '~/Asset/IconNews/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { saveLoadingId } from '~/redux/reduxData/loading';
import { v4 as uuid } from "uuid";
import { handleDeleteFileStorage } from '~/Function/deleteStorage';

function HeaderPosts({ pages, dataUser, dbGroup, datePosts, items }) {
    const [visible, setVisible] = useState(false)
    const tippyRef = useRef(null); // Tham chiếu đến Tippy
    const dispatch = useDispatch();
    const handleDelete = async () => {
        await deleteDoc(doc(db, 'posts-home', items.id));
        await dispatch(saveLoadingId(uuid()))
        if (items.fileUrl)
            handleDeleteFileStorage(items)
    }

    const handleClickOutside = (event) => {
        // Kiểm tra nếu click bên ngoài Tippy
        if (tippyRef.current && !tippyRef.current.contains(event.target)) {
            setVisible(false);
        }
    };
    useEffect(() => {
        // Thêm sự kiện click toàn cục
        document.addEventListener('click', handleClickOutside);
        return () => {
            // Xoá sự kiện khi component unmount
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div className={`header-post ${pages === 'watch' ? 'header-posts-watch' : ''}`}>
            <div className={'user-posts'}>
                <div className={'avatar-user'}>
                    <AvatarImage width="40px" height="40px" src={items.photoUrl} pages={pages} />
                </div>
                <div className={'name-time-user'}>
                    {pages === 'group' ? (
                        <span className={`span-title span-title__${pages}`}>{dbGroup.name}</span>
                    ) :
                        <span className={`span-title`}>{items.displayName}</span>
                        // undefined
                    }
                    <div className={'time-post'}>
                        {pages === 'group' ? <span>{items.displayName} · </span> : undefined}
                        <span><ShowTime datePosts={items.date.seconds} /></span>
                        <span>·</span>
                        <span>
                            <i style={{ height: '12px' }}>
                                <PublicIcon />
                            </i>
                        </span>
                    </div>
                </div>
            </div>
            <div className={'edit-posts'} onClick={() => { setVisible(true) }}>
                <MenuPopup dataUser={dataUser} items={items} onDelete={handleDelete} visible={visible} onHidden={handleClickOutside} tippyRef={tippyRef}>
                    <div className="edit-posts-button">
                        <IconsDots />
                    </div>
                </MenuPopup>
            </div>
        </div>
    );
}

export default HeaderPosts;
