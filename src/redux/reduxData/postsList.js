import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'postsList',
    initialState: [],
    reducers: {
        savePostsList: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { savePostsList } = postsSlice.actions;
export default postsSlice.reducer;
