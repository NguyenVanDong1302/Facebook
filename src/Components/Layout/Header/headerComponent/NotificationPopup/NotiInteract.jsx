import React from 'react'
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar'

export const NotiInteract = ({ type }) => {
    return (
        <div className='notification-add-friend'>
            {/* <PopperWrapper> */}
            <div className='notification-items'>
                <div className='notification-item notification-content'>
                    <div className="notification-image">
                        <AvatarImage src='https://i.pinimg.com/236x/06/59/5b/06595be64b1cc8c603aac2d18e7a9a62.jpg' width={'56px'} height={'56px'} interact={true} />
                    </div>
                    <div className="notification-title">
                        <span>
                            <b>Nguyễn Văn Đông</b> đã bày tỏ cảm xúc về bài viết của bạn
                        </span>
                        <span>vài giây trước</span>
                    </div>
                </div>
            </div>
            {/* </PopperWrapper> */}
        </div >
    )
}

