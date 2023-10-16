import React from "react"
import './PersonalBanner.scss'
import { Icon17Avatar, Icon17Camera } from "~/Asset/IconNews/Icon17"
export const PersonalBanner = () => {
    return (
        <div className="personal-banner-wrapper">
            <div className="personal-banner-content">
                <div>
                    <img src="https://images4.alphacoders.com/640/640956.jpg" alt="" />
                </div>
                <div className="personal-banner-feature">
                    <div className="pb-feature-items">
                        <div className="pb-feature-item">
                            {Icon17Avatar}
                            <span>
                                Tạo với avatar
                            </span>
                        </div>
                        <div className="pb-feature-item">
                            {Icon17Camera}
                            <span>
                                Chỉnh sửa ảnh bìa
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}