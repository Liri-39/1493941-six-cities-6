import {loadOffers, loadComments, loadNearOffers, loadFavoriteList, loadOffer, redirectToRoute, requireAuthorization, setAuthInfo} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api
    .get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api
    .get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(loadNearOffers(data)))
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(loadFavoriteList(data)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api
    .get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(data)))
    .catch(() => dispatch(redirectToRoute(`/404`)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setAuthInfo(data));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api
    .post(APIRoute.LOGIN, {email, password})
    .then((res) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setAuthInfo(res.data));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const sendComment = (id, {comment, rating}) => (dispatch, _getState, api) => {
  api
    .post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then((res) => dispatch(loadComments(res.data)));
};

export const sendFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api
    .post(`${APIRoute.FAVORITES}/${id}/${Number(status)}`)
    .then(({res}) => {
      dispatch(loadFavoriteList(res.data));
      dispatch(loadOffers((res.data)));
    })
);
