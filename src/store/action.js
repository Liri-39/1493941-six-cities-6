import {adaptToClient, adaptCommentsToClient, adaptAuthDataToClient} from "../utils";

export const ActionType = {
  CHANGE_LOCATION: `data/changeLocation`,
  CHANGE_ACTIVE_CARD: `data/changeActiveCard`,
  CHANGE_SORT_TYPE: `data/changeSortType`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_COMMENTS: `data/loadComments`,
  LOAD_NEAR_OFFERS: `data/loadNearOffers`,
  LOAD_FAVORITES_LIST: `data/loadFavoriteList`,
  LOAD_OFFER: `data/loadOffer`,
  SET_AUTH_INFO: `user/setAuthInfo`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  CHANGE_FAVORITE_STATUS: `data/changeFavoriteStatus`,
  ADD_COMMENT: `data/addComment`
};

export const changeLocation = (location) => ({
  type: ActionType.CHANGE_LOCATION,
  payload: location,
});
export const changeActiveCard = (id) => ({
  type: ActionType.CHANGE_ACTIVE_CARD,
  payload: id,
});
export const changeSortType = (sortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: sortType,
});
export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers.map((offer) => adaptToClient(offer)),
});
export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
export const setAuthInfo = (info) => ({
  type: ActionType.SET_AUTH_INFO,
  payload: adaptAuthDataToClient(info),
});
export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments.map((comment) => adaptCommentsToClient(comment)),
});
export const loadNearOffers = (offers) => ({
  type: ActionType.LOAD_NEAR_OFFERS,
  payload: offers.map((offer) => adaptToClient(offer)),
});
export const loadFavoriteList = (offers) => ({
  type: ActionType.LOAD_FAVORITES_LIST,
  payload: offers.map((offer) => adaptToClient(offer)),
});
export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: adaptToClient(offer),
});
export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
export const changeFavoriteStatus = (offer) => ({
  type: ActionType.CHANGE_FAVORITE_STATUS,
  payload: offer,
});
