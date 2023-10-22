import React, { Fragment, useCallback, useContext, useEffect, useState } from 'react'
import PPAbout from './PPAbout/PPAbout'

import './PersonalPosts.scss'
import { AuthContext } from '~/Pages/Messages/context/AuthContext'
import PPAboutImage from './PPAbout/PPAboutImage'
import PPAboutFriend from './PPAbout/PPAboutFriends'
import DesignButton from '~/Components/reuseComponent/PostsItem/AddPost/AddPostsComponent/DesignButton/DesignButton'
import PPType from './PPPosts/PPType'

function PersonalPosts() {
    const [height, setHeight] = useState(0)
    const { currentUser } = useContext(AuthContext)
    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const [style, setStyle] = useState({
        bottom: '-1090px'
    })
    const handleNavigation = useCallback((e) => {
        if (y > window.scrollY) {
            console.log(19, y)
            console.log("scrolling up");
            if (height === 0) {
                setHeight(y - 661)
            }
            setStyle({
                bottom: '0px'
            })
        } else if (y < window.scrollY) {
            setHeight(0)
            setStyle({
                top: '-1000px'
            })
        }
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    console.log(42)
    return (
        <div className='pp-list-items'>
            <div className="pp-container d-flex">
                <div className='pp-about-wrapper'>
                    <Fragment>
                        <div style={{
                            height: height + 'px'
                        }} >
                        </div>
                    </Fragment>
                    <div className='pp-about-container' style={{
                        ...style,
                        position: 'sticky',
                        marginTop: '10px'
                    }}>
                        <PPAbout />
                        <PPAboutImage />
                        <PPAboutFriend />
                    </div>
                </div>
                <div className="pp-wrapper">
                    <div className='pp-posts-container'>
                        <div className="button-show-model-add-posts" >
                            <DesignButton />
                        </div>
                        <div className="pp-type-show-posts">
                            <PPType />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalPosts
