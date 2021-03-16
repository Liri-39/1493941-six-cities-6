import {ActionType} from './action';
import {CityList, SortType} from '../mocks/const';
import {offers} from "../mocks/offers";

const initialState = {
  location: CityList.Paris,
  offers,
  cityList: CityList,
  activeCard: null,
  activeSortType: SortType.Popular,
  sortType: SortType,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case ActionType.CHANGE_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload
      };
    case ActionType.SET_DEFAULT:
      return {
        ...initialState
      };
  }

  return state;
};

export {reducer};
