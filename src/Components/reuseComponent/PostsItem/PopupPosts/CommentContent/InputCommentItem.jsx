import React from 'react'
import './CommentContent.scss'

function InputCommentItem() {
    return (
        <div className='input-comment-component'>
            <span
                contentEditable="true"
                id="new-tag"
                className="badge alert-info input-text-comment text-black text-start "
                data-focused-advice="Start typing"
            ></span>
            <span className="badge input_content_posts d-none" contentEditable={true}
                suppressContentEditableWarning={true} >
                <>
                    <style>
                        {`
                    span.badge[contentEditable]:empty::before {
                    content: "Viết bình luận...";
                    font-weight: 500;
                    }
                     `}
                    </style>
                </>
            </span>
        </div>
    )
}

export default InputCommentItem
