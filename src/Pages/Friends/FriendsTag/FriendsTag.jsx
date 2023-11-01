import React, { useContext } from 'react'
import './FriendsTag.scss'
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper'
import AvatarTags from '~/Components/reuseComponent/Avatar/Tag/AvatarTags'
import { Timestamp, doc, updateDoc } from 'firebase/firestore'
import { db } from '~/firebase'
import { AuthContext } from '~/Pages/Messages/context/AuthContext'
import { GetDataUserDetail } from '~/Components/reuseComponent/GetDataFirestore'

const FriendsTag = ({ type, data }) => {
    const { currentUser } = useContext(AuthContext)
    const dataUserDetail = GetDataUserDetail(currentUser?.uid)
    const dataUserRequests = GetDataUserDetail(data.uid)
    const userAcceptDetail = GetDataUserDetail(data.uid)
    const addFriends = async () => {
        // Lưu thông tin cho người nhận lời mời, tạo noti
        await updateDoc(doc(db, "users", data.uid), {
            ...data,
            Friends: {
                ...data.Friends,
                ListAddFriends: [
                    ...data.Friends.ListAddFriends,
                    {
                        uid: currentUser.uid,
                        date: Timestamp.now(),
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    }
                ]
            },
            Notification: [
                ...userAcceptDetail.Notification,
                {
                    uid: currentUser.uid,
                    date: Timestamp.now(),
                    displayName: currentUser.displayName,
                    photoURL: currentUser.photoURL,
                    type: 'addFriend',
                    isNew: true
                }
            ]
        });
        // Lưu lời mời đã gửi
        await updateDoc(doc(db, "users", dataUserDetail.uid), {
            ...dataUserDetail,
            Friends: {
                ...dataUserDetail.Friends,
                ListFriendsRequested: [
                    ...dataUserDetail.Friends.ListFriendsRequested,
                    {
                        date: Timestamp.now(),
                        uid: data.uid,
                        displayName: data.displayName,
                        avatarURL: data.photoURL,
                    }
                ]
            }
        })
    }


    const rejectAddFriend = async () => {
        // Xoá lời mời được nhận của người dùng hiện tại
        const newListAddFriends = dataUserDetail.Friends?.ListAddFriends?.filter((item) => {
            return item.uid !== data.uid
        })
        const newNotification = dataUserDetail.Friends?.Notification?.filter((item) => {
            return item.uid !== data.uid
        })

        await updateDoc(doc(db, "users", dataUserDetail.uid), {
            ...dataUserDetail,
            Friends: {
                ...dataUserDetail.Friends,
                ListAddFriends: newListAddFriends
            },
            Notification: newNotification
        })

        // Xoá lời mời đã gửi của người dùng được hiện 
        const newListRequested = dataUserRequests.Friends?.ListFriendsRequested?.filter((item) => {
            return item.uid !== currentUser.uid
        })

        await updateDoc(doc(db, "users", data.uid), {
            ...dataUserRequests,
            Friends: {
                ...dataUserRequests.Friends,
                ListFriendsRequested: newListRequested
            }
        })

    }

    const handleAcceptFriends = async () => {
        console.log(52, data)
        const ListAddFriend = dataUserDetail.Friends.ListAddFriends
        const newListAddFriends = ListAddFriend.filter((item) => {
            return item.uid !== data.uid
        })

        console.log(17, userAcceptDetail)
        // console.log(58, data)
        // Update list add friends accept
        await updateDoc(doc(db, "users", currentUser?.uid), {
            ...dataUserDetail,
            Friends: {
                ...data.Friends,
                ListAddFriends: newListAddFriends,
                ListFriends: [
                    ...dataUserDetail?.Friends?.ListFriends,
                    data
                ]
            }
        });
        // // Remove listFriends requested
        const newListRequested = userAcceptDetail.Friends.ListFriendsRequested.filter((item) => {
            return item.uid !== dataUserDetail.uid
        })
        await updateDoc(doc(db, "users", data.uid), {
            ...data,
            Friends: {
                ...data.Friends,
                ListFriendsRequested: newListRequested,
                ListFriends: [
                    ...userAcceptDetail.Friends.ListFriends,
                    {
                        date: Timestamp.now(),
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    }
                ]
            }
        });
    }

    return (
        <div className='friends-tags-wrapper'>
            <PopperWrapper>
                <div className="ft-avatar">
                    <AvatarTags src={data.photoURL} />
                </div>
                <div className="ft-content">
                    <p><strong>{data.displayName}</strong></p>
                    <span>
                        Có 1,3k người theo dõi
                    </span>
                </div>
                <div className="ft-button">
                    <div className={`ft-btn-accept ${type}`}>
                        {
                            type === 'addFr' ?
                                <span onClick={addFriends}>Thêm bạn bè</span>
                                :
                                <span onClick={handleAcceptFriends}>Xác nhận</span>
                        }
                    </div>
                    <div className={`ft-btn-reject ${type}-button-reject`}>
                        {
                            type === 'addFr' ?
                                <span>Xoá, gỡ bỏ</span>
                                :
                                <span onClick={rejectAddFriend} >Huỷ</span>
                        }
                    </div>
                </div>
            </PopperWrapper>
        </div>
    )
}

export default FriendsTag
