import { createSlice } from '@reduxjs/toolkit';

const LoadingIdSlice = createSlice({
    name: 'loadingId',
    initialState: '',
    reducers: {
        saveLoadingId: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { saveLoadingId } = LoadingIdSlice.actions;
export default LoadingIdSlice.reducer;
