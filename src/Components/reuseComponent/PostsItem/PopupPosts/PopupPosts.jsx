import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import PostsItem from '../PostsItem'
import './PopupPosts.scss'
import { CommentContent } from './CommentContent/CommentContent'
import InputCommentItem from './CommentContent/InputCommentItem'

function PopupPosts({ open, onClose, item }) {
    // const [open, setOpen] = useState(false)
    const handleOpen = () => {

    }

    const handleClose = () => {
        onClose()
    }
    return (
        <div>
            <div className='modal-popup-posts-wrapper' >
                <Modal
                    open={open}
                    onClose={handleClose}
                    disableRestoreFocus={true}
                    disableAutoFocus={true}
                    disableEnforceFocus={true}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='modal-content-wrapper'
                >
                    <Box className='modal__content' >
                        <div className="popup-comment-wrapper">
                            <div className="popup-comment-container">
                                <div className="popup-comment-header">
                                    <h3>
                                        Bài viết của {item.displayName}
                                    </h3>
                                </div>
                                <div className="popup-content">
                                    <div className='line'></div>
                                    <PostsItem items={item} popupComment={true} />
                                    <div className="popup-comment__items">
                                        {/* <span>This is content Comment</span> */}
                                        <CommentContent />
                                    </div>
                                </div>
                                <div className="comment-input">
                                    <InputCommentItem />
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default PopupPosts
