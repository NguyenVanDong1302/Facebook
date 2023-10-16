import { createSlice } from '@reduxjs/toolkit';

const pathSlice = createSlice({
    name: 'paths',
    initialState: null,
    reducers: {
        saveState: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { saveState } = pathSlice.actions;
export default pathSlice.reducer;
