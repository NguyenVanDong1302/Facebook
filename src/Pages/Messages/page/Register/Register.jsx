import React, { useState } from "react";
import Add from "~/Asset/ImgMessages/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "~/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '~/Pages/Messages/page/Login/Login.scss'
import './Register.scss'

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              password,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate('/')
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="login-banner">
        <img src="https://firebasestorage.googleapis.com/v0/b/facebook-ui-6f536.appspot.com/o/dF5SId3UHWd.png?alt=media&token=3a105ca2-5ef7-4a5e-bc0b-c3f037e4b9fb" alt="" />
        <span className="">Facebook helps you connect and share with the people in your life.</span>
      </div>
      <div className="formWrapper">
        <form onSubmit={handleSubmit} className='form__register'>
          <input required type="text" placeholder="Full name" />
          <input required type="email" placeholder="Email address" />
          <input required type="password" placeholder="New password" />
          <div className="register__upload__avatar">
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
          </div>
          <button className="button__create login__button " disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <div className="login__after"></div>
        <Link to="/login">
          <button className="login__button button-login">Login</button>
        </Link>

      </div>
    </div>
  );
};

export default Register;