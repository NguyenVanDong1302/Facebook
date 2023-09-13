/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './MarketPostsItem.scss';

function MarketPostItem({ items, key }) {
    return (
        <div className="market-posts-item" key={key}>
            <div className="market-posts__image">
                <img src={items.image} alt="market-posts__image" />
            </div>
            <div className="market-posts__price">
                <span className="market-posts__price-value">{parseInt(items.price).toLocaleString()} ₫</span>
            </div>
            <div className="market-posts__description">
                <span> {items.description}</span>
            </div>
            <div className="market-posts__address">
                <span>{items.address}</span>
            </div>
        </div>
    );
}

export default MarketPostItem;
