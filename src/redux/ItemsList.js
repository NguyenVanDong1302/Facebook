import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './items';

const ItemsList = () => {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        dispatch(addItem(newItem));
        setNewItem('');
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item}>
                        {item}
                        <button onClick={() => handleRemoveItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={handleAddItem}>Add</button>
        </div>
    );
};

export default ItemsList;
