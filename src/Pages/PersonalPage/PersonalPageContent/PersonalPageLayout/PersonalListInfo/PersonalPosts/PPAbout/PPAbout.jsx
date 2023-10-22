import { Icon18ImageI, Icon18ImageMaps } from '~/Asset/IconNews/Icon18'
import React from 'react'
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper'

import './PPAbout.scss'
import StoryItem from '~/Pages/Home/HomeContentItems/PostStory/StoryItems/StoryItem/StoryItem'

function PPAbout() {
    return (
        <div className="pp-about">
            <PopperWrapper>
                <div className="pp-about-items">
                    <div className="pp-about__title">
                        <h4>
                            Giới thiệu
                        </h4>
                    </div>
                    <div className="pp-about-story flex flex-column center">
                        <div className="pp-about-str__title">
                            <span>
                                This is story
                            </span>
                        </div>
                        <div className="pp-about-str__button">
                            Chỉnh sửa tiểu sử
                        </div>
                    </div>
                    <div className="pp-about-item">
                        <div className="pp-about-description">
                            <span>
                                <Icon18ImageI />
                                <b>
                                    Trang cá nhân
                                </b>
                                &nbsp;·&nbsp;
                                Người sáng tạo nội dung số
                            </span>
                            <span>
                                <Icon18ImageMaps />
                                Đến từ
                                &nbsp;
                                <b> Bắc Giang </b>
                            </span>
                        </div>
                        <div className="pp-about-desc__button">
                            Chỉnh sửa chi tiết
                        </div>
                    </div>
                    <div className="pp-about-item">
                        <div className="pp-about-news__items">
                            <StoryItem type='personal' />
                            <StoryItem type='personal' />
                            <StoryItem type='personal' />
                        </div>
                        <div className="pp-about-desc__button">
                            Chỉnh sửa phần Đáng chú ý
                        </div>
                    </div>
                </div>
            </PopperWrapper>
        </div>
    )
}

export default PPAbout
