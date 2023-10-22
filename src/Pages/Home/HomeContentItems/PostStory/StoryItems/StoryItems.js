import React from 'react';
import './StoryItems.scss';
import { AddIcon, AddIconStory } from '~/Asset';
import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser';
import StoryItem from './StoryItem/StoryItem';

function StoryItems() {
    return (
        <div className="story-items-wrapper">
            <div className={'add-story'}>
                <div className={'add-story-icon main-story-user'}>
                    <div className={'img-background'}>
                        <img
                            className={'item-img-background'}
                            src="https://i.pinimg.com/236x/b8/f6/f4/b8f6f491c6998840833a0a037c0b882e.jpg"
                            alt="img-background"
                        ></img>
                    </div>
                    <div className={'main-add'}>
                        <div className={'item-icon-add'}>
                            <AddIconStory color={'white'} />
                        </div>
                        <div className={'add-title'}>Tạo tin</div>
                    </div>
                </div>
            </div>
            <StoryItem />
        </div>
    );
}

export default StoryItems;
