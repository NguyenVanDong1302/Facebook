/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "~/firebase";

import './Login.scss'

function Login() {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (err) {
            setErr(true);
        }
    };
    return (
        <div className="formContainer">
            <div className="login-banner">
                <img src="https://firebasestorage.googleapis.com/v0/b/facebook-ui-6f536.appspot.com/o/dF5SId3UHWd.png?alt=media&token=3a105ca2-5ef7-4a5e-bc0b-c3f037e4b9fb" alt="" />
                <span className="">Facebook helps you connect and share with the people in your life.</span>
            </div>
            <div className="formWrapper">
                <form className="login__form_" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email address or phone number" />
                    <input type="password" placeholder="Password" />
                    <button className="button-login login__button">Login</button>
                    {/* {err && <span>Something went wrong</span>} */}
                </form>
                <a href="#" className="login__forgotten">Forgotten password?</a>
                <div className="login__after"></div>
                <Link to='/register'>
                    <button className="button__create login__button">
                        Create new account
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;