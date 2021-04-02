import {createAction} from '@reduxjs/toolkit';
import {adaptToClient, adaptCommentsToClient, adaptAuthDataToClient} from "../utils";

export const ActionType = {
  CHANGE_LOCATION: `data/changeLocation`,
  CHANGE_ACTIVE_CARD: `data/changeActiveCard`,
  CHANGE_SORT_TYPE: `data/changeSortType`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_COMMENTS: `offer/loadComments`,
  LOAD_NEAR_OFFERS: `offer/loadNearOffers`,
  LOAD_FAVORITES_LIST: `data/loadFavoriteList`,
  LOAD_OFFER: `offer/loadOffer`,
  SET_AUTH_INFO: `user/setAuthInfo`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  ADD_TO_FAVORITE: `data/addToFavorite`,
  DELETE_FROM_FAVORITE: `data/deleteFromFavorite`,
  ADD_COMMENT: `offer/addComment`,
  UPDATE_OFFERS: `data/updateOffers`,
  SET_IS_ERROR: `data/setIsError`,
  SET_IS_DISABLE: `offer/setIsDisable`,
  CHANGE_LOAD_STATUS: `offer/changeLoadStatus`
};

export const changeLocation = createAction(ActionType.CHANGE_LOCATION, (location) => {
  return {
    payload: location,
  };
});
export const changeActiveCard = createAction(ActionType.CHANGE_ACTIVE_CARD, (id) => {
  return {
    payload: id,
  };
});
export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => {
  return {
    payload: sortType,
  };
});
export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer)),
  };
});
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});
export const setAuthInfo = createAction(ActionType.SET_AUTH_INFO, (info) => {
  return {
    payload: adaptAuthDataToClient(info),
  };
});
export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments.map((comment) => adaptCommentsToClient(comment)),
  };
});
export const loadNearOffers = createAction(ActionType.LOAD_NEAR_OFFERS, (offers) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer)),
  };
});
export const loadFavoriteList = createAction(ActionType.LOAD_FAVORITES_LIST, (offers) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer)),
  };
});
export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => {
  return {
    payload: adaptToClient(offer),
  };
});
export const changeLoadStatus = createAction(ActionType.CHANGE_LOAD_STATUS, (status) => {
  return {
    payload: status,
  };
});
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});
export const addToFavorite = createAction(ActionType.ADD_TO_FAVORITE, (offer) => {
  return {
    payload: adaptToClient(offer),
  };
});
export const deleteFromFavorite = createAction(ActionType.DELETE_FROM_FAVORITE, (offer) => {
  return {
    payload: offer.id,
  };
});
export const updateOffers = createAction(ActionType.UPDATE_OFFERS, (offer) => {
  return {
    payload: adaptToClient(offer),
  };
});
export const setIsError = createAction(ActionType.SET_IS_ERROR, (isError) => {
  return {
    payload: isError,
  };
});
export const setIsDisable = createAction(ActionType.SET_IS_DISABLE, (isDisable) => {
  return {
    payload: isDisable,
  };
});
