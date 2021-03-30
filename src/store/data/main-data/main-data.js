import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../../action';
import {CityList, sortType} from "../../../const";

const initialState = {
  offers: [],
  isDataLoaded: false,
  location: CityList.Paris,
  cityList: CityList,
  activeCard: null,
  activeSortType: sortType.popular,
  sortType,
};

const mainData = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.LOAD_OFFERS, (state, action) => {
    state.offers = action.payload;
    state.isDataLoaded = true;
  });
  builder.addCase(ActionType.CHANGE_LOCATION, (state, action) => {
    state.location = action.payload;
  });
  builder.addCase(ActionType.CHANGE_ACTIVE_CARD, (state, action) => {
    state.activeCard = action.payload;
  });
  builder.addCase(ActionType.CHANGE_SORT_TYPE, (state, action) => {
    state.activeSortType = action.payload;
  });
});

export {mainData};
