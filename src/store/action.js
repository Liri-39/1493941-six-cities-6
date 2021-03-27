import {adaptToClient, adaptToServer, adaptCommentsToClient, adaptAuthDataToClient} from "../utils";

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
  SET_AUTH_INFO: `user/setAuthInfo`,
  REDIRECT_TO_ROUTE: `offer/redirectToRoute`,
  CHANGE_FAVORITE_STATUS: `main/changeFavoriteStatus`,
  ADD_COMMENT: `addComment`
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
  setAuthInfo: (info) => ({
    type: ActionType.SET_AUTH_INFO,
    payload: adaptAuthDataToClient(info)
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments.map((comment) => adaptCommentsToClient(comment)),
  }),
  loadNearOffers: (offers) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: offers.map((offer) => adaptToClient(offer)),
  }),
  loadFavoriteList: (offers) => ({
    type: ActionType.LOAD_FAVORITES_LIST,
    payload: offers.map((offer) => adaptToClient(offer)),
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: adaptToClient(offer),
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  changeFavoriteStatus: (offer) => ({
    type: ActionType.CHANGE_FAVORITE_STATUS,
    payload: offer,
  }),
  addComment: (data) => ({
    type: ActionType.ADD_COMMENT,
    payload: data
  })
};
