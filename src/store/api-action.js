import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api
    .get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api
    .get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearOffers(data)))
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteList(data)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api
    .get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(`/404`)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthInfo(data));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api
    .post(APIRoute.LOGIN, {email, password})
    .then((res) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthInfo(res.data));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.LOGOUT)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);
export const sendComment = (id, comment) => (dispatch, _getState, api) => {
  api
    .post(`${APIRoute.COMMENTS}/${id}`, comment)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)));
};

export const sendFavoriteStatus = (id, favorite) => (dispatch, _getState, api) => (
  api
    .post(`${APIRoute.FAVORITES}/${id}/${favorite}`)
    .then(({data}) => dispatch(ActionCreator.changeFavoriteStatus(data)))
);
