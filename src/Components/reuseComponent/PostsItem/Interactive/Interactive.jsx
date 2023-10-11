import React from 'react';

import { CommentIcon, DearIcon, HeartPostsIcon, ShareIcon, WowIcon } from '~/Asset';
import './Interactive.scss';
import { IconComment, IconSharePost, likeIcon } from '~/Asset/IconNews/Icon01';
import Tippy from '@tippyjs/react/headless';
import Interact from '~/Components/Interact/Interact';
import { EmojiInteractHeart } from '~/Asset/Emoji/EmojiInteract/EmojiInteract';

function Interactive({ items }) {
    const handleLike = () => {
        const classLike = '.button-like-' + items.postsId;
        const elmLike = document.querySelector(classLike);
        const elmLikeIcon = document.querySelector(classLike + ' i');
        elmLike.classList.toggle('like-active');
        elmLike.classList.value.includes('like-active')
            ? (elmLikeIcon.style.backgroundPosition = '0px -173px')
            : (elmLikeIcon.style.backgroundPosition = '0px -192px');
    };
    const RenderResult = (attrs) => (
        <div className={'menu-items-wrapper'} tabIndex="-1" {...attrs}>
            <div className={'header-feature-main'}>
                <span>Menu</span>
            </div>

        </div>
    );
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
                    <div className={'comment'}>114 bình luận</div>
                </div>
            </div>
            <ul className={'feature-interactive'}>
                <Interact>
                    <li className={`button-like-${items.postsId} button-like`} onClick={handleLike}>
                        <div>
                            {likeIcon}
                            <span>Thích</span>
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
