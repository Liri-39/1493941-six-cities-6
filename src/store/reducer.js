import {ActionType} from './action';
import {CityList} from '../mocks/const';
import {offers} from "../mocks/offers";

const initialState = {
  location: CityList.Paris,
  offers,
  cityList: CityList,
  activeCard: null
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
    case ActionType.SET_DEFAULT:
      return {
        ...initialState
      };
  }

  return state;
};

export {reducer};
