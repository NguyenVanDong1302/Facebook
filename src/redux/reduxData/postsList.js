import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'postsList',
    initialState: [],
    reducers: {
        savePostsList: (state, action) => {
            for (let post of action.payload) {
                post = {
                    ...post,
                    date: post.seconds,
                };
            }
            return (state = action.payload);
        },
    },
});

export const { savePostsList } = postsSlice.actions;
export default postsSlice.reducer;
