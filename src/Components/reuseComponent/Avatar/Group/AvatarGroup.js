import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);
function AvatarGroup({
    src = 'https://i.pinimg.com/236x/b8/f6/f4/b8f6f491c6998840833a0a037c0b882e.jpg',
    className,
    width,
    height,
}) {
    const [fallback, setFallback] = useState('');
    const HandleError = () => {
        setFallback(
            'https://github.com/NguyenVanDong1302/facebook-ui/blob/main/src/Asset/Image/AvatarUser/noavatar.png?raw=true',
        );
    };
    return (
        <div
            className={cx('avatar-image', className)}
            style={{
                width: width,
                height: height,
                border: 'none',
            }}
        >
            <img className={cx('avatar__image')} src={src} alt="avatarImage" onError={HandleError} />
            <div className="icon-user-online"></div>
        </div>
    );
}

export default AvatarGroup;
