import {ActionType} from './action';
import {CityList, SortType, AuthorizationStatus} from '../mocks/const';

const initialState = {
  location: CityList.Paris,
  offers: [],
  comments: [],
  cityList: CityList,
  activeCard: null,
  activeSortType: SortType.Popular,
  sortType: SortType,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }

  return state;
};

export {reducer};
