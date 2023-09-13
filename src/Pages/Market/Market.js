import SidebarLeft from '~/Components/reuseComponent/Sidebar/SidebarLeft';
import { ListFeatureMarket } from '~/Components/reuseComponent/List/List';
import {Outlet} from 'react-router-dom';
import './Market.scss'

function MarketPlace() {
    document.title = 'Facebook Marketplace | Facebook '
    return (
        <div className="market-page-wrapper">
            <SidebarLeft data={ListFeatureMarket} />
                <Outlet />
        </div>
    );
}

export default MarketPlace;
