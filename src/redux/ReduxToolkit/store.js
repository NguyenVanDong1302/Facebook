import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import itemsReducer from '../items';

const rootReducer = {
    items: itemsReducer,
    // Thêm các reducer khác nếu cần
};

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware(),
});

export default store;
