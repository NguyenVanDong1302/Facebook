// const [posts, setPosts] = useState([]);
// const postsCollectionRef = collection(db, 'posts-home');
// const listUsers = collection(db, 'users');
// const [listUser, setListUser] = useState([]);

import { useDispatch } from 'react-redux';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { saveDataUser } from '~/redux/reduxData/dataUser';

const { collection, getDocs, onSnapshot, doc } = require('firebase/firestore');
const { useState, useEffect, useContext } = require('react');
const { db } = require('~/firebase');

export const GetDataUserDetail = (uid) => {
    const [data, setData] = useState();
    useEffect(() => {
        setTimeout(() => {
            const unSub = onSnapshot(doc(db, 'users', uid), (doc) => {
                setData(doc.data());
            });
            return () => {
                unSub();
            };
        }, 0);
    }, []);
    return data;
};

export const GetDataUser = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users');
    const dispatch = useDispatch();
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            dispatch(saveDataUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
        };
        getUsers();
    }, []);
    return users;
};
export const GetPosts = () => {
    const [posts, setPosts] = useState([]);
    const usersCollectionRef = collection(db, 'testUpdatePosts');
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(usersCollectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);

    return posts;
};
