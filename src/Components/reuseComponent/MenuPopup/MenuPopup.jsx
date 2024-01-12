import React, { useContext } from 'react'
import './MenuPopup.scss'
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '../Popper/Popperwrapper';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { useSelector } from 'react-redux';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '~/firebase';


function MenuPopup({ children, items }) {
    const { currentUser } = useContext(AuthContext)
    const checkCurrent = currentUser.uid === items.usrPosts ? true : false
    const postsList = useSelector((state) => state.postsList);

    const handleDeletePosts = async () => {
        const newPostsList = postsList.filter((item) => {
            return item.postsId !== items.postsId
        })
        await updateDoc(doc(db, "testUpdatePosts", '514818e6-2088-4773-8b53-a6533258d31e'), {
            NewsPost: newPostsList
        });
    }

    const RenderResult = (attrs, instance) => {
        const handleHideTippy = (instance) => {
            // requestAnimationFrame(instance.unmount);
        }
        return (
            <div className="menu-popup"  {...attrs} style={{

            }}>
                <PopperWrapper>
                    <div className="menu-popup-items">
                        <div className="menu-popup-item" onClick={() => {
                            handleHideTippy()
                        }}>
                            <span>
                                <img src="https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/x.png?alt=media&token=a7cf0a18-55d6-4240-8d93-8f24ebd18fd3&_gl=1*1mraf8g*_ga*OTA3NjQ5Nzk4LjE2OTUwMjgwNDY.*_ga_CW55HF8NVT*MTY5Nzk4Njk2NC4zNi4xLjE2OTc5ODc2ODguNjAuMC4w" alt="" />
                            </span>
                            <p>Ẩn bài viết</p>
                        </div>
                        {checkCurrent && <div className="menu-popup-item" onClick={() => {
                            handleDeletePosts()
                            handleHideTippy()
                        }}>
                            <span>
                                <i
                                    className='icon-global'
                                    style={{
                                        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/Icon19.png?alt=media&token=8f8a1f0e-67c5-4431-a06f-7c0d78d8b88e&_gl=1*1wp2sgv*_ga*OTA3NjQ5Nzk4LjE2OTUwMjgwNDY.*_ga_CW55HF8NVT*MTY5ODAyNTU3Ny4zOC4xLjE2OTgwMjU2MDYuMzEuMC4w)`,
                                        backgroundPosition: '0px -882px',
                                        width: '20px',
                                        height: '20px',
                                    }}
                                ></i>
                            </span>
                            <p>
                                Chuyển vào thùng rác
                            </p>
                        </div>}
                    </div>
                </PopperWrapper>
            </div>
        )
    }


    return (
        <div>
            <Tippy
                // visible
                interactive
                placement='bottom-end'
                trigger="click"
                delay={[100, 200]}
                // hideOnClick='true'
                onHide={(instance) => {
                    requestAnimationFrame(instance.unmount);
                }}
                render={RenderResult}
            >
                {children}
            </Tippy>
        </div>
    )
}

export default MenuPopup
