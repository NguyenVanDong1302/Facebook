import React from 'react';

import { CommentIcon, DearIcon, HeartPostsIcon, ShareIcon, WowIcon } from '~/Asset';
import './Interactive.scss';
import { IconComment, IconSharePost, likeIcon } from '~/Asset/IconNews/Icon01';

function Interactive({ items }) {
    const handleLike = () => {
        const classLike = '.button-like-' + items.idPosts;

        const elmLike = document.querySelector(classLike);
        const elmLikeIcon = document.querySelector(classLike + ' i');
        elmLike.classList.value.includes('like-active')
            ? (elmLikeIcon.style.backgroundPosition = '0px -192px')
            : (elmLikeIcon.style.backgroundPosition = '0px -173px');
        elmLike.classList.toggle('like-active');
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
                    <div className={'comment'}>114 bình luận</div>
                </div>
            </div>
            <ul className={'feature-interactive'}>
                <li className={`button-like-${items.idPosts}`} onClick={handleLike}>
                    <div>
                        {likeIcon}
                        <span className="">Thích</span>
                    </div>
                </li>
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
        </div>
    );
}

export default Interactive;
