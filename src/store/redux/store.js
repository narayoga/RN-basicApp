import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from './favoriteSlice'

const store = configureStore({
    reducer: favoriteReducer,
})

export default store;

