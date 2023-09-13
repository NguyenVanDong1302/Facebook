import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './Styles/GlobalStyles';
import { AuthContextProvider } from './Pages/Messages/context/AuthContext';
import { ChatContextProvider } from './Pages/Messages/context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <ChatContextProvider>
            <Router>
                <GlobalStyle>
                    <App />
                </GlobalStyle>
            </Router>
        </ChatContextProvider>
    </AuthContextProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
