import React from 'react'
import { ArrowDownIconMessages, FBIconMessages, NotificationIconMessages, SearchIconMessages } from '~/Asset/Messages/Index';
import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser';
import './DetailUser.scss'
const DetailUser = ({ data }) => {
  return (
    <div className='detailUser-wrapper'>
      {data.user.uid &&
        <>
          <div className='detailUser__user chatInfo__info'>
            <AvatarUser className="detailUser__user__avatar" src={data.user.photoURL} alt="" height='80px' width='80px' online={true} />
            <span className='detailUser__name'>{data.user.displayName}</span>
            <span className='chatInfo__info__status'>Đang hoạt động</span>
          </div>
          <div className='detailUser__feature'>
            <ul>
              <li>
                <p>
                  <FBIconMessages />
                </p>
                <span>Trang cá nhân</span>
              </li>
              <li>
                <p>
                  <NotificationIconMessages />
                </p>
                <span>Tắt thông báo</span>
              </li>
              <li>
                <p>
                  <SearchIconMessages />
                </p>
                <span>Tìm kiếm</span>
              </li>
            </ul>
          </div>
          <div className='detailUser__option'>
            <ul>
              <li>
                <span>
                  Tuỳ chỉnh đoạn chat
                </span>
                <ArrowDownIconMessages />
              </li>
              <li>
                <span>
                  File phương tiện, file và liên kết
                </span>
                <ArrowDownIconMessages />
              </li>
              <li>
                <span>
                  Quyền riêng tư & hỗ trợ
                </span>
                <ArrowDownIconMessages />
              </li>
            </ul>
          </div>
        </>
      }
    </div>
  )
}

export default DetailUser
