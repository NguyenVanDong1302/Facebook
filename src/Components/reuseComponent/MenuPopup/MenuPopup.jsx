import React from 'react'
import { OptionalIcon } from '~/Asset'
import './MenuPopup.scss'
import { IconsDots } from '~/Asset/IconNews/Icons'
import Tippy from '@tippyjs/react/headless';
function MenuPopup({ children }) {
    const RenderResult = () => {
        return (
            <div className="menu-popup" style={{
                width: '20px',
                height: '15px',
                backgroundColor: 'red'

            }}>
                This is popup Option
            </div>
        )
    }


    return (
        <div>
            <Tippy
                // visible
                interactive
                placement='top-start'
                trigger="mouseenter"
                delay={[100, 200]}
                hideOnClick='true'
                onHide={(instance) => {
                    requestAnimationFrame(instance.unmount);
                }
                }
                render={RenderResult}
            >
                {children}
            </Tippy>
        </div>
    )
}

export default MenuPopup
