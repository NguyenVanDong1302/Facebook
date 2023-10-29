import React, { useContext } from 'react'
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper'
import FriendsTag from './FriendsTag/FriendsTag'
import { GetDataUser, GetDataUserDetail } from '~/Components/reuseComponent/GetDataFirestore'
import { AuthContext } from '../Messages/context/AuthContext'
function FriendsHome() {
    const { currentUser } = useContext(AuthContext)
    const dataUserDetail = GetDataUserDetail(currentUser?.uid)
    const listUser = GetDataUser()
    // const [userSuggest, setUserSuggest] = useState([])

    const newData1 = listUser.filter((item) => {
        return item.uid !== currentUser.uid
    })
    const data1 = newData1.filter(item1 => !dataUserDetail.Friends?.ListFriends?.find(item2 => item2.uid === item1.uid));
    const data2 = data1.filter(item1 => !dataUserDetail?.Friends?.ListFriendsRequested?.find(item2 => item2.uid === item1.uid))
    const newArray = data2.filter(item1 => !dataUserDetail.Friends.ListAddFriends?.find(item2 => item2.uid === item1.uid))
    return (
        <div className="friends-page-container">
            <h2>Friend Requests</h2>
            <div className="friends-requests-wrapper">
                <div className="fa-items">
                    {
                        dataUserDetail?.Friends?.ListAddFriends?.map((item) => {
                            return <div className="fa-item">
                                <FriendsTag data={item} key={item.uid} />
                            </div>
                        })
                    }
                </div>
            </div>
            <h2>Friends Suggest</h2>
            <div className="friends-suggest-wrapper">
                <div className="fs-items">
                    {
                        newArray.map((item) => {
                            return <div className="fs-item">
                                <FriendsTag type='addFr' data={item} key={item.uid} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FriendsHome
