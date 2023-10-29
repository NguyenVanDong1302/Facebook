import React, { useContext, useEffect, useReducer, useState } from 'react';

import { CommentIcon, DearIcon, HeartPostsIcon, ShareIcon, WowIcon } from '~/Asset';
import './Interactive.scss';
import { IconComment, IconSharePost, likeIcon, likedIcon } from '~/Asset/IconNews/Icon01';
import Tippy from '@tippyjs/react/headless';
import Interact from '~/Components/Interact/Interact';
import { EmojiInteractHeart, IconInteractAngry, IconInteractHaha, IconInteractHeart, IconInteractLove, IconInteractSad, IconInteractWow } from '~/Asset/Emoji/EmojiInteract/EmojiInteract';
import { useDispatch, useSelector } from 'react-redux';
import { savePostsList } from '~/redux/reduxData/postsList';
import { type } from '@testing-library/user-event/dist/type';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '~/firebase';
import { v4 as uuid } from "uuid";
import { saveLoadingId } from '~/redux/reduxData/loading';

function Interactive({ items }) {
    const [showInteract, setShowInteract] = useState(
        <span>
            {likeIcon}
            <span>Thích</span>
        </span>
    )

    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext)
    const checkLiked = items?.interact?.find((item) => {
        return item.userId === currentUser.uid
    })

    // console.log(35, checkLiked)
    useEffect(() => {
        if (checkLiked !== undefined) {
            handleShowLike(checkLiked.type)
            // setShowInteract(
            //     <span className='like-active'>
            //         {likedIcon}
            //         <span>Thích</span>
            //     </span>)
        }
    }, [items])



    const handleShowLike = (typeLike) => {
        switch (typeLike) {
            case 'haha':
                setShowInteract(
                    <span className='interact__haha'>
                        <IconInteractHaha />
                        <span className='interact__haha'>Haha</span>
                    </span>
                );

                break;
            case 'heart':
                setShowInteract(
                    <span className='interact-heart'>
                        <IconInteractHeart />
                        <span className='interact__heart'>Yêu thích</span>
                    </span>
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
            case 'love':
                setShowInteract(
                    <>
                        <IconInteractLove />
                        <span className='interact__haha'>Thương thương</span>
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
            case 'like':
                setShowInteract(
                    <span className='like-active'>
                        {likedIcon}
                        <span>Thích</span>
                    </span>
                )
                break
            default:
                setShowInteract(
                    <span className=''>
                        {likeIcon}
                        <span>Thích</span>
                    </span>
                )
        }
    }

    const handleLike = async (type) => {
        if (checkLiked !== undefined) {
            const newInteract = items.interact.map((item) => {
                return item.userId === currentUser.uid ? {
                    ...item,
                    type: type,
                }
                    :
                    {
                        ...item
                    }
            })
            await updateDoc(doc(db, "posts-home", items.id), {
                ...items,
                interact: newInteract
            });
            await dispatch(saveLoadingId(uuid()))
        } else {
            const newInteract = [
                ...items.interact,
                {
                    type: type,
                    userId: currentUser.uid
                }
            ]
            await updateDoc(doc(db, "posts-home", items.id), {
                ...items,
                interact: newInteract
            });
            await dispatch(saveLoadingId(uuid()))
        }
    }

    const handleUpdateLike = async (type = 'like') => {
        if (checkLiked !== undefined) {
            const newInteract = items.interact.filter((item) => {
                return item !== checkLiked
            })
            await updateDoc(doc(db, "posts-home", items.id), {
                ...items,
                interact: newInteract
            });
            await dispatch(saveLoadingId(uuid()))
        } else {
            const newInteract = [
                ...items.interact,
                {
                    type: type,
                    userId: currentUser.uid
                }
            ]
            await updateDoc(doc(db, "posts-home", items.id), {
                ...items,
                interact: newInteract
            });
            await dispatch(saveLoadingId(uuid()))
        }
    }

    const toggleLike = async () => {
        if (checkLiked !== undefined) {
            handleShowLike()
        } else {
            handleShowLike('like')
        }
        handleUpdateLike()
    }

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
                <Interact handleShowLike={handleShowLike} handleLike={handleLike}>
                    <li className={`button-like-${items.postsId} button-like`} onClick={toggleLike}>
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
