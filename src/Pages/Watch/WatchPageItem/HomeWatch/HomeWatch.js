/* eslint-disable no-unused-vars */
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '~/firebase';
import PostsItem from '~/Components/reuseComponent/PostsItem/PostsItem';
import NewVideo from './NewVideo';

function HomeWatch() {
    const [posts, setPosts] = useState([]);
    const [listUser, setListUsers] = useState([]);
    const usersCollectionRef = collection(db, 'posts-watch');
    const listUsers = collection(db, 'users');
    const pages = 'watch';
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        const getListUser = async () => {
            const users = await getDocs(listUsers);
            setListUsers(users.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getListUser();
        getUsers();
    }, []);
    return (
        <div className="watch-page-content">
            <>
                <NewVideo />
            </>
            <div className="watch-page-content__posts-items">
                {posts.map((posts, index) => {
                    const dbUser = listUser.find((user) => user.idUser === posts.idUser);
                    return (
                        <div key={index}>
                            <PostsItem items={posts} dataUser={dbUser} pages={pages} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomeWatch;
