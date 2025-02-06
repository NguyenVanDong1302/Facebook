import './PostsItem.scss';
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper';

import Interactive from './Interactive/BottomPosts';
import InteractiveWatch from './Interactive/InteractiveWatch';
import { v4 as uuid } from 'uuid';
import HeaderPosts from './HeaderPosts/HeaderPosts';
import ReactPlayer from 'react-player'
import { useState } from 'react';

function PostsItem({ items, pages, dbGroup = undefined, popupCommentShow = false }) {
    const handleShowContent = () => {
        if (items.typeFile) {
            const video = items.fileUrl
            return (
                <div className={`posts-item-video ${pages === 'watch' ? 'posts-item-video-watch' : ''}`}>
                    <ReactPlayer
                        url={video}
                        config={{
                            facebook: {
                                appId: '12345'
                            }
                        }}
                        muted={true}
                        controls={true}
                        pip={true}
                        onProgress={(state) => {
                            state.played = 2
                        }}
                    />
                </div>
            );
        } else if (items.fileUrl) {
            return (
                <div className="posts-item-image">
                    <img src={items.fileUrl} alt="" />
                </div>
            );
        } else {
            return null;
        }
    };

    const handleTitlePosts = () => {
        const title = items.textContent.split('&enter');
        return (
            <div className="content-posts__title">
                {title.map((item, index) => {
                    return <span key={uuid()}>{item}</span>;
                })}
            </div>
        );
    };
    return (
        <>
            {/* {dataUser !== undefined && */}
            <PopperWrapper>
                <HeaderPosts items={items} pages={pages} dbGroup={dbGroup} />
                <div className={'content-posts'}>
                    {items.textContent && (
                        <div className={`content-posts-title ${pages === 'watch' ? 'content-posts-title-watch' : ''}`}>
                            <span>{handleTitlePosts()}</span>
                            <span>
                            </span>
                        </div>
                    )}
                    <div className={`content-posts-items ${pages === 'watch' ? 'content-posts__items-watch' : ''}`}>
                        {handleShowContent()}
                    </div>
                </div>
                {pages === 'watch' ? <InteractiveWatch items={items} /> : <Interactive items={items} popupComment={popupCommentShow} />}
            </PopperWrapper>
            {/* } */}
        </>
    );
}

export default PostsItem;
