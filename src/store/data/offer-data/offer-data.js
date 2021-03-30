import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from '../../action';

const initialState = {
  comments: [],
  nearPlaces: [],
  offer: null,
  isOfferLoaded: false,
  isCommentsLoaded: false,
  isNearPlacesLoaded: false,
};

const offerData = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.LOAD_OFFER, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoaded = true;
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
      state.onLoadCommentFormData = true;
      state.commentFormError = ``;
    });
});

export {offerData};
