/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    onSnapshot,
    orderBy,
    query,
    startAfter,
    updateDoc,
    where,
} from 'firebase/firestore';
import { db } from '~/firebase';
import PostsItem from '~/Components/reuseComponent/PostsItem/PostsItem';
import { DataUser, GetDataUser, GetPosts } from '~/Components/reuseComponent/GetDataFirestore';

import './PostsNews.scss';
import { useSelector } from 'react-redux';
import { LoadPostsSkeleton } from '~/Components/reuseComponent/LoadPostsSkeleton/LoadPostsSkeleton';

const PostsNews = () => {
    const listUser = GetDataUser();
    const loadingId = useSelector((state) => state.loadingId);
    const [posts, setPosts] = useState();
    useEffect(() => {
        const postsCollectionRef = query(collection(db, 'posts-home'), orderBy('date', 'desc'));
        const getUsers = async () => {
            const data = await getDocs(postsCollectionRef);
            if (data._snapshot.syncStateChanged) {
                setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            }
        };
        getUsers();
    }, [loadingId]);

    return (
        <>
            {
                posts ?
                    <div className="posts-news__wrapper">
                        {posts
                            ?.map((posts, index) => {
                                const dbUser = listUser.find((user) => user.uid === posts.usrPosts);
                                return (
                                    <div key={index}>
                                        <PostsItem items={posts} dataUser={dbUser} />
                                    </div>
                                );
                            })}
                    </div>
                    :
                    <LoadPostsSkeleton />
            }
        </>
    );
};

export default PostsNews;
