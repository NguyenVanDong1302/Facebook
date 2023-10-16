import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import itemsReducer from '../reduxData/items';
import pathSlice from '../reduxData/paths';

const rootReducer = {
    items: itemsReducer,
    paths: pathSlice,
    // Thêm các reducer khác nếu cần
};

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware(),
});

export default store;
