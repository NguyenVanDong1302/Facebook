import { useContext } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import GamePage from '~/Pages/Game/Game';
import GameHome from '~/Pages/Game/GameConponent/GameHome';
import GroupPage from '~/Pages/Group/Group';
import HomeGroup from '~/Pages/Group/HomeGroup/HomeGroup';
import HomePage from '~/Pages/Home/Home';
import MarketPlacePage from '~/Pages/Market/Market';
import HomeMarket from '~/Pages/Market/MarketPageItem/HomeMarket/HomeMarket';
import Mailbox from '~/Pages/Market/MarketPageItem/Mailbox';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import PageMessages from '~/Pages/Messages/Messages';
import HomeMessage from '~/Pages/Messages/page/HomeMessages';
import MainLogin from '~/Pages/Messages/page/Login/Login';
import Register from '~/Pages/Messages/page/Register/Register';
import WatchPage from '~/Pages/Watch/Watch';
import BroadcastsWatch from '~/Pages/Watch/WatchPageItem/BroadcastsWatch';
import HomeWatch from '~/Pages/Watch/WatchPageItem/HomeWatch/HomeWatch';
import LiveWatch from '~/Pages/Watch/WatchPageItem/LiveWatch';
import VideoSavedWatch from '~/Pages/Watch/WatchPageItem/Videosaved';

function Content() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/watch" element={<WatchPage />}>
                <Route path="/watch" element={<HomeWatch />} />
                <Route path="/watch/live" element={<LiveWatch />} />
                <Route path="/watch/broadcasts" element={<BroadcastsWatch />} />
                <Route path="/watch/saved" element={<VideoSavedWatch />} />
            </Route>
            <Route path="/market" element={<MarketPlacePage />}>
                <Route path="/market" element={<HomeMarket />} />
                <Route path="/market/notification" element={<LiveWatch />} />
                <Route path="/market/mailbox" element={<Mailbox />} />
            </Route>
            <Route path="/group" element={<GroupPage />}>
                <Route path="/group" element={<HomeGroup />} />
                <Route path="/group/discover" element={<HomeGroup />} />
            </Route>
            <Route path="/gaming" element={<GamePage />}>
                <Route path="/gaming" element={<GameHome />} />
            </Route>
            <Route path="/messages" element={<HomeMessage />} />
        </Routes>
    );
}

export default Content;
