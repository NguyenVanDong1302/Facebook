/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext, useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
import { db } from '~/firebase';
import PostsItem from '~/Components/reuseComponent/PostsItem/PostsItem';
import { DataUser, GetDataUser, GetPosts } from '~/Components/reuseComponent/GetDataFirestore';

import './PostsNews.scss';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { useSelector } from 'react-redux';

const PostsNews = () => {
    // const dataPosts = GetPosts();
    const listUser = GetDataUser();
    const [dataPosts, setDataPosts] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const loadingId = useSelector((state) => state.loadingId);
    const [posts, setPosts] = useState();
    // useEffect(() => {
    //     const unSub = onSnapshot(doc(db, 'testUpdatePosts', '514818e6-2088-4773-8b53-a6533258d31e'), (doc) => {
    //         dispatch(savePostsList(doc.data().NewsPost));
    //         setDataPosts(doc.data().NewsPost);
    //         setLoading(uuid());
    //     });
    //     return () => {
    //         unSub();
    //     };
    // }, ['514818e6-2088-4773-8b53-a6533258d31e']);

    useEffect(() => {
        const postsCollectionRef = collection(db, 'posts-home');
        const getUsers = async () => {
            const data = await getDocs(postsCollectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, [loadingId]);
    return (
        <div className="posts-news__wrapper">
            {posts
                ?.sort((a, b) => b?.date - a?.date)
                ?.map((posts, index) => {
                    const dbUser = listUser.find((user) => user.uid === posts.usrPosts);
                    return (
                        <div key={index}>
                            <PostsItem items={posts} dataUser={dbUser} />
                        </div>
                    );
                })}
        </div>
    );
};

export default PostsNews;
