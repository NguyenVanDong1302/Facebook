import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import PostsItem from '~/Components/reuseComponent/PostsItem/PostsItem';
import { db } from '~/firebase';
import { groups } from '../Group';
import './HomeGroup.scss';

function HomeGroup() {
    const [posts, setPosts] = useState([]);
    const [listUser, setListUser] = useState([]);
    const [listGroup, setListGroup] = useState([]);
    const postsCollectionRef = collection(db, 'posts-group');
    const groupCollection = collection(db, 'group');
    const userCollecttion = collection(db, 'users');
    const pages = 'group';
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        const getUsers = async () => {
            const data = await getDocs(userCollecttion);
            setListUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        const getGroup = async () => {
            const data = await getDocs(groupCollection);
            setListGroup(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
        getPosts();
        getGroup();
    }, []);
    return (
        <div className="group-page-wrapper">
            <div className="group-page-content">
                <div className="group-posts__items">
                    {posts.map((post, index) => {
                        const dbUser = listUser.find((user) => user.idUser === post.idUser);
                        const dbGroup = listGroup.find((group) => group.idGroup === post.idGroup);
                        return <PostsItem items={post} dataUser={dbUser} key={index} pages={pages} dbGroup={dbGroup} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default HomeGroup;
