import React from 'react';
import { ReelsIcon, StoryIcon, ZoomIcon } from '~/Asset';
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper';
import './PostsStory.scss';
import StoryItems from './StoryItems/StoryItems';

function PostsStory() {
    return (
      <div className="posts-story-wrapper">
              <PopperWrapper>
                <div className="posts-story-items">
                    <div className="posts-story__header">
                        <ul>
                            <li className="active">
                                <StoryIcon />
                                <span className="span-title">Tin</span>
                            </li>
                            <li>
                                <ReelsIcon />
                                <span className="span-title"> Reels</span>
                            </li>
                            <li>
                                <ZoomIcon />
                                <span className="span-title"> Phòng họp mặt</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <StoryItems />
                    </div>
                </div>
        </PopperWrapper>
            </div>
    );
}

export default PostsStory;
