import {
    GamingActiveIcon,
    GamingIcon,
    GroupActiveIcon,
    GroupIcon,
    HouseActiveIcon,
    HouseIcon,
    MarketActiveIcon,
    MarketPlaceIcon,
    WatchActiveIcon,
    WatchIcon,
} from '~/Asset/HeaderRouter';

import '../Header.scss';
import { useLocation } from 'react-router-dom';
import HeaderRouter from '~/Components/reuseComponent/HeaderRouter/HeaderRouter';
import TippySwPage from '~/Components/reuseComponent/Tippy/TippySwPage';

function HeaderCenter() {
    const location = useLocation();
    const checkPathname = location.pathname.split('/')[1];
    return (
        <div className="HeaderCenter">
            <ul>
                <li>
                    <HeaderRouter to={'/'} active={checkPathname === '' ? 'active' : ''}>
                        <TippySwPage content="Trang chủ">
                            <span className="icon-header-center">
                                {checkPathname === '' ? <HouseActiveIcon /> : <HouseIcon />}
                            </span>
                        </TippySwPage>
                    </HeaderRouter>
                </li>
                <li>
                    <HeaderRouter to="/watch" active={checkPathname === 'watch' ? 'active' : ''}>
                        <TippySwPage content="Watch">
                            <span className="icon-header-center">
                                {checkPathname === 'watch' ? <WatchActiveIcon /> : <WatchIcon />}
                            </span>
                        </TippySwPage>
                    </HeaderRouter>
                </li>
                <li>
                    <HeaderRouter to="/market" active={checkPathname === 'market' ? 'active' : ''}>
                        <TippySwPage content="Marketplace">
                            <span className="icon-header-center">
                                {checkPathname === 'market' ? <MarketActiveIcon /> : <MarketPlaceIcon />}
                            </span>
                        </TippySwPage>
                    </HeaderRouter>
                </li>
                <li>
                    <HeaderRouter to="/group" active={checkPathname === 'group' ? 'active' : ''}>
                        <TippySwPage content="Nhóm">
                            <span className="icon-header-center">
                                {checkPathname === 'group' ? <GroupActiveIcon /> : <GroupIcon />}
                            </span>
                        </TippySwPage>
                    </HeaderRouter>
                </li>
                <li>
                    <HeaderRouter to="/gaming" active={checkPathname === 'gaming' ? 'active' : ''}>
                        <TippySwPage content="Trò chơi">
                            <span className="icon-header-center">
                                {checkPathname === 'gaming' ? <GamingActiveIcon /> : <GamingIcon />}
                            </span>
                        </TippySwPage>
                    </HeaderRouter>
                </li>
            </ul>
        </div>
    );
}

export default HeaderCenter;
