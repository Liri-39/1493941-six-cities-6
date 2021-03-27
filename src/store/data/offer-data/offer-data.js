import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from '../../action';

const initialState = {
  comments: [],
  nearPlaces: [],
  offer: null,
  isOfferLoaded: false,
  isCommentsLoaded: false,
  isNearPlacesLoaded: false,
  isDisabled: false,
};

const offerData = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.LOAD_OFFER, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(ActionType.CHANGE_LOAD_STATUS, (state, action) => {
      state.isOfferLoaded = action.payload;
    })
    .addCase(ActionType.LOAD_COMMENTS, (state, action) => {
      state.comments = action.payload;
      state.isCommentsLoaded = true;
    })
    .addCase(ActionType.LOAD_NEAR_OFFERS, (state, action) => {
      state.nearPlaces = action.payload;
      state.isNearPlacesLoaded = true;
    })
    .addCase(ActionType.ADD_COMMENT, (state, action) => {
      state.comments = [...state.comments, action.payload];
    })
    .addCase(ActionType.SET_IS_DISABLE, (state, action) => {
      state.isDisabled = action.payload;
    });
});

export {offerData};
