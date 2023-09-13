import React, { useContext } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import HomeMessage from './page/HomeMessages';
import Home from './page/HomeMessages';
import MainLogin from './page/Login/Login';
import Register from './page/Register/Register';

function PageMessages() {
    const { currentUser } = useContext(AuthContext);
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {

            return <Navigate to="/login" />;
        }
        return children;
    };
    <Routes path="/">
        <Route
            index
            element={
                <ProtectedRoute>
                    <HomeMessage />
                </ProtectedRoute>
            }
        />
    </Routes>;
}

export default PageMessages;
