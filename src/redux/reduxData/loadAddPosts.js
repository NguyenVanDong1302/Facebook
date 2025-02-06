import { createSlice } from '@reduxjs/toolkit';

const loadAddPosts = createSlice({
    name: 'loadAddPosts',
    initialState: '',
    reducers: {
        saveLoadAddPosts: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { saveLoadAddPosts } = loadAddPosts.actions;
export default loadAddPosts.reducer;
