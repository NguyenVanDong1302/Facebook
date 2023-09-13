import SidebarLeft from '~/Components/reuseComponent/Sidebar/SidebarLeft';
import { ListFeatureWatch } from '~/Components/reuseComponent/List/List';
import {Outlet} from 'react-router-dom';
import './WatchPageContent.scss'

function WatchPage() {
    document.title = 'Watch | Facebook '
    return (
        <div className="watch-page-wrapper">
            <SidebarLeft data={ListFeatureWatch} />
                <Outlet />
        </div>
    );
}

export default WatchPage;
