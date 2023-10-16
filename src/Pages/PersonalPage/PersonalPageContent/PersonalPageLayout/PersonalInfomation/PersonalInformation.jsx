import { useContext, useState } from "react";
import { Icon17Pen, Icon17Speaker, Icon17Wrench } from "~/Asset/IconNews/Icon17";
import { Icon18Dropdown } from "~/Asset/IconNews/Icon18";
import AvatarImage from "~/Components/reuseComponent/Avatar/Avatar"
import './PersonalInformation.scss'
import { AuthContext } from "~/Pages/Messages/context/AuthContext";
import HeaderRouter from "~/Components/reuseComponent/RouterComponent/HeaderRouter";
import { useLocation } from "react-router-dom";

export const PersonalInformation = () => {
    const { currentUser } = useContext(AuthContext);
    const src = currentUser?.photoURL
    const [size, setSize] = useState('w')
    const handleLoad = () => {
        var tempImage = new Image();
        tempImage.src = src;
        tempImage.onload = function () {
            const width = tempImage.width;
            const height = tempImage.height;
            if (width < height) {
                setSize('h')
            }
        };
    };
    const location = useLocation();
    const checkPathname = location.pathname.split('/')[1];
    handleLoad()
    return (
        <div className="personal-information-wrapper">
            <div className="personal-information-content">
                <div className="pi-items">
                    <div className="pi-item">
                        <div className="pi-avatar-user">
                            <AvatarImage src={currentUser?.photoURL} width={'168px'} height={'168px'} size={size} />
                        </div>
                        <div className="pi-space"></div>
                        <div className="pi-detail-user">
                            <div className="pi-name-user">
                                <h1>{currentUser.displayName}</h1>
                                <p>2,8k follow  •  6 đang theo dõi</p>
                            </div>
                        </div>
                    </div>
                    <div className="pi-item">
                        <div className="pi-item-feature">
                            <span>
                                <Icon17Pen />
                                <p>Chỉnh sửa</p>
                            </span>
                            <span>
                                <Icon17Wrench />
                                <p>Xem công cụ</p>
                            </span>
                            <span>
                                <Icon17Speaker />
                                <p>
                                    Quảng cáo trang cá nhân
                                </p>
                            </span>
                            <span>
                                {Icon18Dropdown}
                            </span>
                        </div>
                    </div>
                </div>

                {/* personal RouterComponent */}
                <div className="pi-router">
                    <ul>
                        <li>
                            <HeaderRouter to={'/personalpage'} active={checkPathname === 'personalpage' ? 'active' : ''}>
                                <span>Bài viết</span>
                            </HeaderRouter>
                        </li>
                        <li>
                            <HeaderRouter to={'/personalpage/about'} active={checkPathname === '' ? 'active' : ''}>
                                <span>Giới thiệu</span>
                            </HeaderRouter>
                        </li>
                        <li>
                            <HeaderRouter to={'/reels'} active={checkPathname === '' ? 'active' : ''}>
                                <span>Reels</span>
                            </HeaderRouter>
                        </li>
                        <li>
                            <HeaderRouter to={'/photos'} active={checkPathname === '' ? 'active' : ''}>
                                <span>Ảnh</span>
                            </HeaderRouter>
                        </li>
                        <li>
                            <HeaderRouter to={'/video'} active={checkPathname === '' ? 'active' : ''}>
                                <span>Video</span>
                            </HeaderRouter>
                        </li>
                        <li>
                            <HeaderRouter to={'/groups'} active={checkPathname === '' ? 'active' : ''}>
                                <span>Nhóm</span>
                            </HeaderRouter>
                        </li>
                        <li>
                            <HeaderRouter to={'/personal'} active={checkPathname === '' ? 'active' : ''}>
                                <span>Xem thêm</span>
                            </HeaderRouter>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}