import {adaptToClient} from "../utils";

export const ActionType = {
  CHANGE_LOCATION: `main/changeLocation`,
  CHANGE_ACTIVE_CARD: `main/changeActiveCard`,
  CHANGE_SORT_TYPE: `main/changeSortType`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_COMMENTS: `data/loadComments`,
  LOAD_NEAR_OFFERS: `data/loadNearOffers`,
  LOAD_FAVORITES_LIST: `data/loadFavoriteList`,
  LOAD_OFFER: `data/loadOffer`,
  SET_LOGIN: `user/setLogin`,
};

export const ActionCreator = {
  changeLocation: (location) => ({
    type: ActionType.CHANGE_LOCATION,
    payload: location,
  }),
  changeActiveCard: (id) => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: id,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers.map((offer) => adaptToClient(offer)),
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setLogin: (loginName) => ({
    type: ActionType.SET_LOGIN,
    payload: loginName
  }),
  loadComments: () => ({
    type: ActionType.LOAD_COMMENTS,
    payload: status,
  }),
  loadNearOffers: () => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: status,
  }),
  loadFavoriteList: () => ({
    type: ActionType.LOAD_FAVORITES_LIST,
    payload: status,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: adaptToClient(offer),
  }),
};
