import React from 'react';
import './StoryItems.scss';
import { AddIcon, AddIconStory } from '~/Asset';
import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser';

function StoryItem() {
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

            <div className="main-story-user">
                <div
                    className="story-user"
                    style={{
                        backgroundImage: `url('https://i.pinimg.com/736x/83/81/4c/83814c3e9e7e80d00f454bc8eee3a347.jpg')`,
                    }}
                >
                    <div className="avatar-user">
                        <AvatarUser className="border-avatar-user-story" src="" />
                        {/* <OnlineIcon className='user-online' right="2px" /> */}
                    </div>

                    <div className="coasting">
                        <img
                            className="image-Story"
                            src="https://i.pinimg.com/736x/83/81/4c/83814c3e9e7e80d00f454bc8eee3a347.jpg"
                            alt="imgStory"
                        />
                    </div>

                    <span className="name-user">Nguyễn Văn Đông</span>
                </div>
            </div>
        </div>
    );
}

export default StoryItem;
