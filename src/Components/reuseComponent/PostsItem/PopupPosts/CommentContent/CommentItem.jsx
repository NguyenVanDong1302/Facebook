import React from 'react'
import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser'

import './CommentContent.scss'

export const CommentItem = () => {
    return (
        <div className='comment-item-wrapper'>
            <div className="comment-item__content d-flex">
                <div className="cmt-item__avatar">
                    <AvatarUser src='https://i.pinimg.com/564x/ab/ec/8a/abec8af3fe4362735d91b71e4f74f366.jpg' />
                </div>
                <div className="cmt-item__detail ml-1">
                    <div className='cmt-item__content d-flex flex-column'>
                        <div className="user-cmt mb-1">
                            <span>Nguyễn Trọng Nghĩa</span>
                        </div>
                        <div className="cmt__content">
                            <span>7 năm mà có được cái nào không?</span>
                        </div>
                    </div>
                    <div className="cmt-item__interactive d-flex">
                        <span className='cmt-item__like'>
                            Thích
                        </span>
                        <span className='comt-item__reply'>
                            Phản hồi
                        </span>
                        <p>
                            42 phút
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
