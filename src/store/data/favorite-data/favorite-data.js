import {loadFavoriteList, addToFavorite, deleteFromFavorite} from '../../action';
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  isFavoritesLoaded: false,
};

const favoriteData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFavoriteList, (state, action) => {
      state.isFavoritesLoaded = true;
      state.favorites = action.payload;
    })
    .addCase(addToFavorite, (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    })
    .addCase(deleteFromFavorite, (state, action) => {
      const index = state.favorites.findIndex((favorite) => favorite.id === action.payload);
      state.favorites = [
        ...state.favorites.slice(0, index),
        ...state.favorites.slice(index + 1)
      ];
    });
});

export {favoriteData};
