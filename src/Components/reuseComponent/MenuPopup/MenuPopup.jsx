import React from 'react'
import { OptionalIcon } from '~/Asset'
import './MenuPopup.scss'

function MenuPopup() {
    const RenderMenu = () => {

    }


    return (
        <div>
            <span><OptionalIcon /></span>
            <div className="render-menu">
                {
                    RenderMenu()
                }
            </div>
        </div>
    )
}

export default MenuPopup
