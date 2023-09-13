import Chat from "../components/Chat/Chat"
import DetailUser from "../components/DetailUser/DetailUser"
import Sidebar from "../components/Sidebar/Sidebar"

function HomeMessages() {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default HomeMessages
