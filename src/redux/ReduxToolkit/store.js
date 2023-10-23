import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import itemsReducer from '../reduxData/items';
import pathSlice from '../reduxData/paths';
import postsSlice from '../reduxData/postsList';

const rootReducer = {
    items: itemsReducer,
    paths: pathSlice,
    postsList: postsSlice,
    // Thêm các reducer khác nếu cần
};

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware(),
});

export default store;
