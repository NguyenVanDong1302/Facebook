import React, { useContext } from 'react'
import { AuthContext } from '../Messages/context/AuthContext'
import { GetDataUserDetail } from '~/Components/reuseComponent/GetDataFirestore'

function FriendsList() {
    const { currentUser } = useContext(AuthContext)
    const dataUserDetail = GetDataUserDetail(currentUser?.uid)
    return (
        <div>
            {
                dataUserDetail?.Friends?.ListFriends?.map((item) => {
                    return <span>{item.displayName}</span>
                })
            }
        </div>
    )
}

export default FriendsList
