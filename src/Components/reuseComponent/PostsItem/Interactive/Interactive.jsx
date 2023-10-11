import React, { useState } from 'react';

import { CommentIcon, DearIcon, HeartPostsIcon, ShareIcon, WowIcon } from '~/Asset';
import './Interactive.scss';
import { IconComment, IconSharePost, likeIcon } from '~/Asset/IconNews/Icon01';
import Tippy from '@tippyjs/react/headless';
import Interact from '~/Components/Interact/Interact';
import { EmojiInteractHeart, IconInteractAngry, IconInteractHaha, IconInteractHeart, IconInteractSad, IconInteractWow } from '~/Asset/Emoji/EmojiInteract/EmojiInteract';

function Interactive({ items }) {
    const [showInteract, setShowInteract] = useState(
        <>
            {likeIcon}
            <span>Thích</span>
        </>
    )

    const handleLike = (typeLike) => {
        switch (typeLike) {
            case 'like':
                setShowInteract(
                    <>
                        {likeIcon}
                        <span>Thích</span>
                    </>
                );
                break;
            case 'haha':
                setShowInteract(
                    <>
                        <IconInteractHaha />
                        <span className='interact__haha'>Haha</span>
                    </>
                );
                break;
            case 'heart':
                setShowInteract(
                    <>
                        <IconInteractHeart />
                        <span className='interact__heart'>Yêu thích</span>
                    </>
                );
                break
            case 'sad':
                setShowInteract(
                    <>
                        <IconInteractSad />
                        <span className='interact__haha'>Buồn</span>
                    </>
                );
                break
            case 'wow':
                setShowInteract(
                    <>
                        <IconInteractWow />
                        <span className='interact__haha'>Wow</span>
                    </>
                );
                break
            case 'angry':
                setShowInteract(
                    <>
                        <IconInteractAngry />
                        <span className='interact__heart'>Phẫn nộ</span>
                    </>
                );
                break
            default:
                return (
                    <>
                        {likeIcon}
                        <span>Thích</span>
                    </>
                )
        }

        const classLike = '.button-like-' + items.postsId;
        const elmLike = document.querySelector(classLike);
        const elmLikeIcon = document.querySelector(classLike + ' i');
        elmLike.classList.toggle('like-active');
        elmLike.classList.value.includes('like-active')
            ? (elmLikeIcon.style.backgroundPosition = '0px -173px')
            : (elmLikeIcon.style.backgroundPosition = '0px -192px');
    };

    return (
        <div className={'interactive'}>
            <div className={'detail-interactive'}>
                <div className={'detail-icon'}>
                    <span>
                        <HeartPostsIcon />
                    </span>
                    <span>
                        <DearIcon />
                    </span>
                    <span>
                        <WowIcon />
                    </span>
                </div>
                <div className={'detail-title'}>
                    <div className={'link'}>Thu Phương và 4,5k người khác</div>
                    <div className={'comment'}>Comment</div>
                </div>
            </div>
            <ul className={'feature-interactive'}>
                <Interact handleLike={handleLike}>
                    <li className={`button-like-${items.postsId} button-like`} onClick={() => { handleLike('like') }}>
                        <div>
                            {showInteract}
                        </div>
                    </li>
                </Interact>
                <li>
                    <div>
                        {IconComment}
                        <span>Bình luận</span>
                    </div>
                </li>
                <li>
                    <div>
                        {IconSharePost}
                        <span>Chia sẻ</span>
                    </div>
                </li>
            </ul>
        </div >
    );
}

export default Interactive;
