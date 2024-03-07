import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import jobReducer from './jobSlice';
import uiReducer from './uiSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        job: jobReducer,
        ui: uiReducer
    }
})

export default appStore;