import React from 'react'
import './PPPosts.scss'
import { Icon03Filter, Icon03Setting } from '~/Asset/IconNews/Icon03'

function PPType() {
    return (
        <div className='pp-type-show-wrapper'>
            <div className="pp-type-show-items">
                <div className="pp-type-show-item">
                    <div className="ppTs-title">
                        <h4>Bài viết</h4>
                    </div>
                    <div className="button-feature">
                        <span>
                            {Icon03Filter}
                            Bộ lọc
                        </span>
                        <span>
                            {Icon03Setting}
                            Quản lý bài viết
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PPType
