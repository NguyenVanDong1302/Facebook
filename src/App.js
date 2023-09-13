import { useContext } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Content from './Components/Layout/Content';
import Header from './Components/Layout/Header';
import { AuthContext } from './Pages/Messages/context/AuthContext';
import MainLogin from './Pages/Messages/page/Login/Login';
import Register from './Pages/Messages/page/Register/Register';
import '~/Styles/Style/StyleMessages.scss';
import BoxChat from './Components/BoxChat/BoxChat';

function App() {
    const location = useLocation();
    const checkPathname = location.pathname.split('/')[1];
    const { currentUser } = useContext(AuthContext);
    console.log(15, currentUser);
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
                    <ProtectedRoute>
                        <Header />
                        <Content />
                        <BoxChat />
                    </ProtectedRoute>
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
