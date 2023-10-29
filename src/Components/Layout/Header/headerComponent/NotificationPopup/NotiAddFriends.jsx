import React from 'react'
import { CloseIcon05 } from '~/Asset/IconNews/Icon05'
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar'

function NotiAddFriends({ closeToast, type }) {
    return (
        <div className='notification-add-friend'>
            {/* <PopperWrapper> */}
            <div className='notification-items'>
                {type &&
                    <div className='notification-item notification-top'>
                        <span> Thông báo mới</span>
                        <span
                            className='btn-close-notification'
                            onClick={closeToast}
                        >
                            {CloseIcon05}
                        </span>
                    </div> 
                }
                <div className='notification-item notification-content'>
                    <div className="notification-image">
                        <AvatarImage src='https://i.pinimg.com/236x/06/59/5b/06595be64b1cc8c603aac2d18e7a9a62.jpg' width={'56px'} height={'56px'} />
                    </div>
                    <div className="notification-title">
                        <span>
                            <b>Nguyễn Văn Đông</b> đã gửi cho bạn lời mời kết bạn.
                        </span>
                        <span>vài giây trước</span>
                        <div className=" notification-button">
                            <span>
                                Xác nhận
                            </span>
                            <span>
                                Xoá
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* </PopperWrapper> */}
        </div >
    )
}

export default NotiAddFriends
