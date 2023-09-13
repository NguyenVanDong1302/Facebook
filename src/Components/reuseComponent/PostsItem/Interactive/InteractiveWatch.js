import React from 'react';
import { CommentIcon, DearIcon, HeartPostsIcon, ShareIcon, WowIcon } from '~/Asset';
import { LikeIcon } from '~/Asset/IconNews/Icon01';

function InteractiveWatch({ items }) {
    const handleLike = () => {
        const classLike = '.button-like-' + items.idPosts;

        const elmLike = document.querySelector(classLike);
        const elmLikeIcon = document.querySelector(classLike + ' i');
        elmLike.classList.value.includes('like-active')
            ? (elmLikeIcon.style.backgroundPosition = '0px -251px')
            : (elmLikeIcon.style.backgroundPosition = '0px -232px');
        elmLike.classList.toggle('like-active');
    };
    return (
        <div className={'interactive interactive-watch'}>
            <ul className={'feature-interactive feature-interactive-watch'}>
                <li className={`button-like-${items.idPosts}`} onClick={handleLike}>
                    <div>
                        {/* <LikeIcon /> */}
                        <span className="">Thích</span>
                    </div>
                </li>
                <li>
                    <div>
                        <CommentIcon />
                        <span>Bình luận</span>
                    </div>
                </li>
                <li>
                    <div>
                        <ShareIcon />
                        <span>Chia sẻ</span>
                    </div>
                </li>
            </ul>
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
                    <span className={'link'}>4,5k </span>
                    <div className="space"> · </div>
                    <span className={'comment'}>114 bình luận</span>
                    <div className="space"> · </div>
                    <span className={'view'}>693k lượt xem</span>
                </div>
            </div>
        </div>
    );
}

export default InteractiveWatch;
