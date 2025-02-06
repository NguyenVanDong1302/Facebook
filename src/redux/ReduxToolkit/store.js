import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import itemsReducer from '../reduxData/items';
import pathSlice from '../reduxData/paths';
import postsSlice from '../reduxData/postsList';
import LoadingIdSlice from '../reduxData/loading';
import dataUserSlice from '../reduxData/dataUser';
import popupPostsSlice from '../reduxData/popupPosts';
import loadAddPosts from '../reduxData/loadAddPosts';

const rootReducer = {
    items: itemsReducer,
    paths: pathSlice,
    postsList: postsSlice,
    loadingId: LoadingIdSlice,
    dataUser: dataUserSlice,
    popupPosts: popupPostsSlice,
    loadAdd: loadAddPosts 
    // Thêm các reducer khác nếu cần
};

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
