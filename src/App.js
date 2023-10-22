import { useContext } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Content from './Components/Layout/Content';
import Header from './Components/Layout/Header';
import { AuthContext } from './Pages/Messages/context/AuthContext';
import MainLogin from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import '~/Styles/Style/StyleMessages.scss';
import BoxChat from './Components/BoxChat/BoxChat';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './redux/ReduxToolkit/store';

function App() {
    const location = useLocation();
    const checkPathname = location.pathname.split('/')[1];
    const { currentUser } = useContext(AuthContext);
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }
        return children;
    };
    return (
        <>
            {checkPathname === 'login' || checkPathname === 'register' ? null : (
                <>
                    <Provider store={store}>
                        <ProtectedRoute>
                            <Header />
                            <Content />
                            <BoxChat />
                        </ProtectedRoute>
                    </Provider>
                </>
            )}
            <Routes>
                <Route path="/login" element={<MainLogin />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
