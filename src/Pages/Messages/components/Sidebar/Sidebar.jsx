import React from 'react'
import Chats from '../Chats/Chats'
import Navbar from '../Navbar/Navbar'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div className='sidebar'>
                <Navbar />
                <Chats />
        </div>
    )
}

export default Sidebar
