import { createSlice } from '@reduxjs/toolkit';

const popupPostsSlice = createSlice({
    name: 'popupPosts',
    initialState: false,
    reducers: {
        saveShowPopup: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { saveShowPopup } = popupPostsSlice.actions;
export default popupPostsSlice.reducer;
