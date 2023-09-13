import './PostsItem.scss';
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper';

import Interactive from './Interactive/Interactive';
import InteractiveWatch from './Interactive/InteractiveWatch';
import HeaderPosts from './HeaderPosts/HeaderPosts';

function PostsItem({ items, dataUser, pages, dbGroup = undefined }) {

    const handleShowContent = () => {
        if (items.video) {
            return (
                <div className={`posts-item-video ${pages === 'watch' ? 'posts-item-video-watch' : ''}`}>
                    <video loop controls>
                        <source src={items.video} type="video/mp4" />
                    </video>
                </div>
            );
        } else if (items.img) {
            return (
                <div className="posts-item-image">
                    <img src={items.img} alt="" />
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
                    return <span key={index}>{item}</span>;
                })}
            </div>
        );
    };
    return (
        <>
            {dataUser !== undefined &&
                <PopperWrapper>
                    <HeaderPosts items={items} pages={pages} dataUser={dataUser} dbGroup={dbGroup} datePosts={items.date} />
                    <div className={'content-posts'}>
                        {items.textContent ? (
                            <div className={`content-posts-title ${pages === 'watch' ? 'content-posts-title-watch' : ''}`}>
                                <span>{handleTitlePosts()}</span>
                                <span>
                                </span>
                            </div>
                        ) : undefined}
                        <div className={`content-posts-items ${pages === 'watch' ? 'content-posts__items-watch' : ''}`}>
                            {handleShowContent()}
                        </div>
                    </div>
                    {pages === 'watch' ? <InteractiveWatch items={items} /> : <Interactive items={items} />}
                </PopperWrapper>
            }
        </>
    );
}

export default PostsItem;
