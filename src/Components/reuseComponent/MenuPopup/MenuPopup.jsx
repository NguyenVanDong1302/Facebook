import React, { useContext } from 'react'
import './MenuPopup.scss'
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '../Popper/Popperwrapper';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';

function MenuPopup({ children, items, onDelete, visible, tippyRef }) {
    const { currentUser } = useContext(AuthContext)
    const checkCurrent = currentUser.uid === items.usrPosts ? true : false
    const RenderResult = (attrs, instance) => {
        return (
            <div className="menu-popup"  {...attrs} style={{

            }}>
                <PopperWrapper>
                    <div className="menu-popup-items">
                        <div className="menu-popup-item" onClick={() => {
                            // handleHideTippy()
                        }}>
                            <span>
                                <img src="https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/x.png?alt=media&token=a7cf0a18-55d6-4240-8d93-8f24ebd18fd3&_gl=1*1mraf8g*_ga*OTA3NjQ5Nzk4LjE2OTUwMjgwNDY.*_ga_CW55HF8NVT*MTY5Nzk4Njk2NC4zNi4xLjE2OTc5ODc2ODguNjAuMC4w" alt="" />
                            </span>
                            <p>Ẩn bài viết</p>
                        </div>
                        {checkCurrent && <div className="menu-popup-item" onClick={() => {
                            onDelete()
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
                visible={visible}
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
                {/* {children} */}
                <div ref={tippyRef}>
                    {children}
                </div>
            </Tippy>
        </div>
    )
}

export default MenuPopup
