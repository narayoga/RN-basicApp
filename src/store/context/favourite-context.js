import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext(null)

function FavoriteContextProvider({ children }) {
    const [favoriteItem, setFavoriteItem] = useState([])

    const addFavorite = (item) => {
        setFavoriteItem((currentItem) => [...currentItem, item])
    }

    const deleteFavorite = (item) => {
        setFavoriteItem((currentItem) =>
            currentItem.filter((favItem) => favItem !== item)
        );
    }

    const value = {
        item: favoriteItem,
        addFavorite: addFavorite,
        deleteFavorite: deleteFavorite
    }

    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider;