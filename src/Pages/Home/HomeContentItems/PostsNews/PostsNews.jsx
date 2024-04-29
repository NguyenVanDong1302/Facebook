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
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { ToastAddFriends } from '~/Components/reuseComponent/Toast/ToastAddFriend/ToastAddFriend';
import { saveLoadingId } from '~/redux/reduxData/loading';
import { v4 as uuid } from 'uuid';

import Loader from './Loader';
import { SkeletonLoad } from '~/Components/reuseComponent/SkeletonLoad/SkeletonLoad';
import { LoadPostsSkeleton } from '~/Components/reuseComponent/LoadPostsSkeleton/LoadPostsSkeleton';

const PostsNews = () => {
    // const dataPosts = GetPosts();
    const listUser = GetDataUser();
    const [dataPosts, setDataPosts] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const loadingId = useSelector((state) => state.loadingId);
    const [posts, setPosts] = useState();
    const [lastVisible, setLastVisible] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const postsCollectionRef = query(collection(db, 'posts-home'), orderBy('date', 'desc'), limit(3));
        const getUsers = async () => {
            const data = await getDocs(postsCollectionRef);
            if (data._snapshot.syncStateChanged) {
                setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                setLastVisible(data.docs[data.docs.length - 1]);
            }
        };
        // dispatch(saveLoadingId(uuid()));
        getUsers();
    }, [loadingId]);

    let timeout = null
    const debounce = (callback) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback()
        }, 1000);

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [posts]);

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            // handleLoadPostsInfinite(posts);
            setLoading(true)
            debounce(handleLoadPostsInfinite)
        }
    };

    const handleLoadPostsInfinite = async (params) => {
        const postsCollectionRef = query(
            collection(db, 'posts-home'),
            orderBy('date', 'desc'),
            startAfter(lastVisible || 0),
            limit(3),
        );

        const onInfinite = async () => {
            const data = await getDocs(postsCollectionRef);
            const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setPosts([...posts, ...newData]);
            setLastVisible(data.docs[data.docs.length - 1]);
            if (newData.length > 0) {
                setLoading(false)
            }
        };
        onInfinite();
        // setLoading(false)
    };

    // F8F9FA;
    return (
        <>
            {/* <LoadPostsSkeleton /> */}
            <div className="posts-news__wrapper">
                {posts
                    // ?.sort((a, b) => b?.date - a?.date)
                    ?.map((posts, index) => {
                        const dbUser = listUser.find((user) => user.uid === posts.usrPosts);
                        return (
                            <div key={index}>
                                <PostsItem items={posts} dataUser={dbUser} />
                            </div>
                        );
                    })}
            </div>
            {loading && <LoadPostsSkeleton />}
        </>
    );
};

export default PostsNews;
