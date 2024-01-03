import React from 'react'
import { CommentItem } from './CommentItem'
import InputCommentItem from './InputCommentItem'

export const CommentContent = () => {
    return (
        <div className='comment-content-wrapper flex-column justify-content-between d-flex'>
            <div className="comment-content__content">
                <CommentItem />
                <CommentItem />
            </div>
        </div>
    )
}

