import { useState } from 'react';
import './Avatar.scss';
import AvatarUser from './User/AvatarUser';

function AvatarImage({
    src = 'https://i.pinimg.com/236x/b8/f6/f4/b8f6f491c6998840833a0a037c0b882e.jpg',
    className,
    width,
    height,
    pages,
    type,
}) {
    const [fallback, setFallback] = useState('');
    const HandleError = () => {
        setFallback(
            'https://github.com/NguyenVanDong1302/facebook-ui/blob/main/src/Asset/Image/AvatarUser/noavatar.png?raw=true',
        );
    };
    const checkType = type !== undefined ? 'checkType__' + type : '';
    return (
        <div className="avatar-image-wrapper">
            <div
                className={`avatar-image ${pages === 'group' ? 'avatar-group' : ''} ${checkType}`}
                style={{
                    width: width,
                    height: height,
                }}
            >
                <img className={`avatar__image `} src={src} alt="avatarImage" onError={HandleError} />
                <div className="icon-user-online"></div>
            </div>
            {pages === 'group' ? (
                <div className="avatar-user-posts">
                    <AvatarUser height="24px" width="24px" />
                </div>
            ) : undefined}
        </div>
    );
}

export default AvatarImage;
