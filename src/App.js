import { useContext } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Content from './Components/Layout/Content';
import Header from './Components/Layout/Header';
import { AuthContext } from './Pages/Messages/context/AuthContext';
import MainLogin from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import '~/Styles/Style/StyleMessages.scss';
import BoxChat from './Components/BoxChat/BoxChat';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './redux/ReduxToolkit/store';
import { ToastAddFriends } from './Components/reuseComponent/Toast/ToastAddFriend/ToastAddFriend';
import { styled } from '@mui/material/styles';

function App() {
    const location = useLocation();
    const checkPathname = location.pathname.split('/')[1];
    const { currentUser } = useContext(AuthContext);
    const Div = styled('div')``;
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }
        return children;
    };
    return (
        <Div>
            {checkPathname === 'login' || checkPathname === 'register' ? null : (
                <>
                    <Provider store={store}>
                        <ProtectedRoute>
                            <Header />
                            <Content />
                            <BoxChat />
                            <ToastAddFriends />
                        </ProtectedRoute>
                    </Provider>
                </>
            )}
            <Routes>
                <Route path="/login" element={<MainLogin />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Div>
    );
}

export default App;
