import './HomeMarket.scss';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '~/firebase';
import MarketPostItem from './MarketPosts/MarketPostsItem';
import { MapIcon, MapIcon2 } from '~/Asset';

function HomeMarket() {
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

    return (
        <div className="market-page-wrapper">
            <div className="market-page-content">
                <div className="market-posts-items">
                    <div className="market-posts-items__header">
                        <span className="market-posts-items__header__title">Lựa chọn hôm nay</span>
                        <div className="market-posts-items__header__address">
                            <MapIcon2 /> Hà Nội · 40km
                        </div>
                    </div>
                    {posts.map((post, index) => (
                        <MarketPostItem items={post} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeMarket;
