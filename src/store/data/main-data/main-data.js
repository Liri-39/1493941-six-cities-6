import {createReducer} from '@reduxjs/toolkit';
import {changeSortType, changeLocation, loadOffers, changeActiveCard, updateOffers, setIsError} from '../../action';
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
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(changeActiveCard, (state, action) => {
      state.activeCard = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.activeSortType = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [
        ...state.offers.slice(0, index),
        action.payload,
        ...state.offers.slice(index + 1)
      ];
    })
    .addCase(setIsError, (state, action) => {
      state.isError = action.payload;
    });
});

export {mainData};
