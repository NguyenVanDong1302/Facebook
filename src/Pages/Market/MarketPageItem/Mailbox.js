import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '~/firebase';

const Mailbox = () => {
    const [posts, setPosts] = useState([]);
    const usersCollectionRef = collection(db, 'posts-market');
    const pages = 'market';
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    return <div>This is mail box</div>;
};

export default Mailbox;
