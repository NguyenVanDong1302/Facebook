import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import itemsReducer from '../reduxData/items';
import pathSlice from '../reduxData/paths';
import postsSlice from '../reduxData/postsList';
import LoadingIdSlice from '../reduxData/loading';
const rootReducer = {
    items: itemsReducer,
    paths: pathSlice,
    postsList: postsSlice,
    loadingId: LoadingIdSlice,
    // Thêm các reducer khác nếu cần
};

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
