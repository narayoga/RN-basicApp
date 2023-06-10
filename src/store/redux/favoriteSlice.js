import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorite: []
}

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorite.push(action.payload)
        },
        removeFavorite: (state, action) => {
            const index = state.favorite.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.favorite.splice(index, 1);
            }
        }
    }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer