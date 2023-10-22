import React from 'react';
import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser';

import './StoryItem.scss';

export const StoryItem = (type) => {
    return (
        <div className='story-user-wrapper'>
            <div className="main-story-user">
                <div
                    className="story-user"
                    style={{
                        backgroundImage: `url('https://i.pinimg.com/736x/83/81/4c/83814c3e9e7e80d00f454bc8eee3a347.jpg')`,
                    }}
                >
                    {type === 'personal' ? (
                        <div className="avatar-user">
                            <AvatarUser className="border-avatar-user-story" src="" />
                            {/* <OnlineIcon className='user-online' right="2px" /> */}
                        </div>
                    ) : null}

                    <div className="coasting">
                        <img
                            className="image-Story"
                            src="https://i.pinimg.com/736x/83/81/4c/83814c3e9e7e80d00f454bc8eee3a347.jpg"
                            alt="imgStory"
                        />
                    </div>
                    <span className="name-user">{type === 'personal' ? 'Van Dong' : '+3'}</span>
                </div>
            </div>
            {
                type === "personal" ? null :
                    <span className='story-desc'>
                        Luv
                    </span>
            }
        </div>
    );
};

export default StoryItem;
