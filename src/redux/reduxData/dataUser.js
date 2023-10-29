import { createSlice } from '@reduxjs/toolkit';

const dataUserSlice = createSlice({
    name: 'dataUser',
    initialState: null,
    reducers: {
        saveDataUser: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { saveDataUser } = dataUserSlice.actions;
export default dataUserSlice.reducer;
