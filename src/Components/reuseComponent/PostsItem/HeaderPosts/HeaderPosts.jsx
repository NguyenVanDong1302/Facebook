import { async } from '@firebase/util';
import Tippy from '@tippyjs/react/headless';
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CloseIcon, OptionalIcon, PenIcon2, PublicIcon } from '~/Asset';
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar';
import { db } from '~/firebase';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import ShowTime from '../../ShowTime/ShowTime';

import './HeaderPosts.scss';
import MenuPopup from '../../MenuPopup/MenuPopup';
import { IconsDots } from '~/Asset/IconNews/Icons';
import { useSelector } from 'react-redux';

function HeaderPosts({ pages, dataUser, dbGroup, datePosts, items }) {
    const { currentUser } = useContext(AuthContext)
    const [content, setContent] = useState(items.textContent);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const checkText = document.querySelector('.update__textContent')
        // const file = e.target[0].files[0];
        const textContent = checkText.innerHTML
        // console.log(textContent);
        // await updateDoc(doc(db, "testUpdatePosts", '514818e6-2088-4773-8b53-a6533258d31e'), {
        // NewsPost: arrayUnion({
        //     textContent,
        //     usrPosts: currentUser.uid,
        //     date: Timestamp.now(),
        // })
        // });
    }


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
                        <span><ShowTime datePosts={datePosts.seconds} /></span>
                        <span>·</span>
                        <span>
                            <i style={{ height: '12px' }}>
                                <PublicIcon />
                            </i>
                        </span>
                    </div>
                </div>
            </div>
            <div className={'edit-posts'}>
                <MenuPopup dataUser={dataUser} items={items}>
                    <div className="edit-posts-button">
                        <IconsDots />
                    </div>
                </MenuPopup>
            </div>
        </div>
    );
}

export default HeaderPosts;
