import React from "react"
import './PersonalBanner.scss'
import { Icon17Avatar, Icon17Camera } from "~/Asset/IconNews/Icon17"
export const PersonalBanner = () => {
    return (
        <div className="personal-banner-wrapper">
            <div className="personal-banner-content">
                <div>
                    <img src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/356652690_762941728948855_7217270530314487186_n.jpg?stp=dst-jpg_p640x640&_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_ohc=V_nmpKwo-SAAX-puXp2&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCZvQZfUdmiRY_QcuccoOCRF7S1H9Sk3Js38_hi6ejotA&oe=652C6810" alt="" />
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