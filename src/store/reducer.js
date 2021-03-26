import {ActionType} from './action';
import {CityList, SortType, AuthorizationStatus} from '../const';

const initialState = {
  location: CityList.Paris,
  offers: [],
  comments: [],
  nearPlaces: [],
  offer: null,
  favorites: [],
  cityList: CityList,
  activeCard: null,
  activeSortType: SortType.Popular,
  sortType: SortType,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  isOfferLoaded: false,
  isCommentsLoaded: false,
  isNearPlacesLoaded: false,
  isFavoritesLoaded: false,
  authInfo: null
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
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferLoaded: true
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true
      };
    case ActionType.LOAD_NEAR_OFFERS:
      return {
        ...state,
        nearPlaces: action.payload,
        isNearPlacesLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload
      };
    case ActionType.LOAD_FAVORITES_LIST:
      return {
        ...state,
        favorites: action.payload,
        isFavoritesLoaded: true
      };
    case ActionType.ADD_COMMENT:
      return {
        ...state,
        comments: action.payload,
        onLoadCommentFormData: true,
        commentFormError: ``
      };
  }

  return state;
};

export {reducer};
