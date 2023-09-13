// const [posts, setPosts] = useState([]);
// const postsCollectionRef = collection(db, 'posts-home');
// const listUsers = collection(db, 'users');
// const [listUser, setListUser] = useState([]);

const { collection, getDocs } = require('firebase/firestore');
const { useState, useEffect } = require('react');
const { db } = require('~/firebase');

// useEffect(() => {
//     const getUsers = async () => {
//         const data = await getDocs(postsCollectionRef);
//         setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     const getListUser = async () => {
//         const users = await getDocs(listUsers);
//         setListUser(users.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     getListUser();
//     getUsers();
// }, []);

export const GetDataUser = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users');

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers()
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
        getPosts()
    }, []);

    return posts;
};





