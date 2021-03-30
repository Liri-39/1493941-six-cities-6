import {ActionType} from '../../action';
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  isFavoritesLoaded: false,
};

const favoriteData = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.LOAD_FAVORITES_LIST, (state, action) => {
      state.isFavoritesLoaded = true;
      state.favorites = action.payload;
    });
});

export {favoriteData};
