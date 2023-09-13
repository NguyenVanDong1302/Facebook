import React from 'react';
import { DotHorizontal2Icon } from '~/Asset';
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar';
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper';
import './HomeWatch.scss';

function NewVideo() {
    return (
        <div className="new-video-wrapper">
            <PopperWrapper className={'popper-wrapper'}>
                <div className="new-video-item">
                    <div className="new-video-header">
                        <span>Video mới dành cho bạn · 1</span>
                    </div>
                    <div className="new-video-content">
                        <AvatarImage height="60px" width="60px" className="new-video-content__image" />
                        <div className="new-video-text">
                            <p>Video mới của Trung tâm Tin tức VTV24</p>
                            <span className="new-video__time-up">
                                <span className="new-video__icon-time-up"></span>
                                <span className="new-video__time">3 giờ trước</span>
                            </span>
                        </div>
                        <div className='new-video-content__interactive'>
                            <DotHorizontal2Icon />
                        </div>
                    </div>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default NewVideo;
