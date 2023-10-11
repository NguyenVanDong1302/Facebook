import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            // state.push(action.payload);
            return (state = [...state, action.payload]);
        },
        removeItem: (state, action) => {
            const index = state.filter((item) => item.chatId !== action.payload);
            return (state = index);
        },
    },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
