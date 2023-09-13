import Tippy from '@tippyjs/react';
import { Outlet } from 'react-router-dom';
import { ListFeatureGame } from '~/Components/reuseComponent/List/List';
import SidebarLeft from '~/Components/reuseComponent/Sidebar/SidebarLeft';

function GamePage() {
    document.title = 'Facebook Gaming | Xem buổi phát trực tiếp trò chơi điện tử | Facebook';
    return (
        <>
            <div className="game-page-wrapper">
                <SidebarLeft data={ListFeatureGame} />
                <Outlet />
            </div>

        </>
    );
}

export default GamePage;
