import { useState } from 'react';

import './AvatarUser.scss';

function AvatarUser({
    className,
    width = '36px',
    height = '36px',
    alt,
    online,
    src = 'https://github.com/NguyenVanDong1302/facebook-ui/blob/main/src/Asset/Image/AvatarUser/noavatar.png?raw=true',
}) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(
            'https://github.com/NguyenVanDong1302/facebook-ui/blob/main/src/Asset/Image/AvatarUser/noavatar.png?raw=true',
        );
    };
    return (
        <div className={`user-avatar-wrapper ${className}`}>
            <img
                className={`user-avatar-sidebar `}
                src={fallback || src}
                alt={alt}
                onError={handleError}
                style={{
                    width,
                    height,
                }}
            />
            {online === true ? <span className={'user-avatar-online'}></span> : null}
        </div>
    );
}

export default AvatarUser;
