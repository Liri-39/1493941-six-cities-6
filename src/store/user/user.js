import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.REQUIRED_AUTHORIZATION, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(ActionType.SET_AUTH_INFO, (state, action) => {
      state.authInfo = action.payload;
    });
});

export {user};
