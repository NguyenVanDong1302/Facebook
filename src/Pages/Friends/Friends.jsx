import React, { useContext, useState } from 'react'
import AvatarTags from '~/Components/reuseComponent/Avatar/Tag/AvatarTags'
import { ListFeatureFriends } from '~/Components/reuseComponent/List/List'
import SidebarLeft from '~/Components/reuseComponent/Sidebar/SidebarLeft'

import './Friends.scss'

import { Outlet } from 'react-router-dom'
function Friends() {


    return (
        <div className='friends-page-wrapper'>
            <SidebarLeft data={ListFeatureFriends} />
            
            <Outlet />
        </div>
    )
}

export default Friends
