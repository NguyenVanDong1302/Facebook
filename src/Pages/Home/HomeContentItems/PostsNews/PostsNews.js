/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext, useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
import { db } from '~/firebase';
import PostsItem from '~/Components/reuseComponent/PostsItem/PostsItem';
import { DataUser, GetDataUser, GetPosts } from '~/Components/reuseComponent/GetDataFirestore';

import './PostsNews.scss';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { useDispatch } from 'react-redux';
import { savePostsList } from '~/redux/reduxData/postsList';

const PostsNews = () => {
    // const dataPosts = GetPosts();
    const listUser = GetDataUser();
    const [dataPosts, setDataposts] = useState([]);
    const { currentUser } = useContext(AuthContext);
    // const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'testUpdatePosts', '514818e6-2088-4773-8b53-a6533258d31e'), (doc) => {
            dispatch(savePostsList(doc.data().NewsPost));
            setDataposts(doc.data().NewsPost);
        });
        return () => {
            unSub();
        };
    }, ['514818e6-2088-4773-8b53-a6533258d31e']);

    return (
        <div className="posts-news__wrapper">
            {dataPosts
                .sort((a, b) => b?.date - a?.date)
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
