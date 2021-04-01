import {
  addToFavorite,
  loadOffers,
  loadComments,
  loadNearOffers,
  loadFavoriteList,
  loadOffer,
  redirectToRoute,
  requireAuthorization,
  setAuthInfo,
  deleteFromFavorite,
  updateOffers,
  setIsError
} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
    .catch(() => {
      dispatch(setIsError(true));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api
    .get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
    .catch(() => {
      dispatch(setIsError(true));
    })
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api
    .get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(loadNearOffers(data)))
    .catch(() => {
      dispatch(setIsError(true));
    })
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(loadFavoriteList(data)))
    .catch(() => dispatch(setIsError(true)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api
    .get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(data)))
    .catch(() => {
      dispatch(setIsError(true));
      dispatch(redirectToRoute(`/404`));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api
    .get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setAuthInfo(data));
    })
    .catch(() => dispatch(setIsError(true)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api
    .post(APIRoute.LOGIN, {email, password})
    .then((res) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setAuthInfo(res.data));
    })
    .catch(() => dispatch(setIsError(true)))
);

export const sendComment = (id, {comment, rating}) => (dispatch, _getState, api) => {
  api
    .post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then((res) => dispatch(loadComments(res.data)))
    .catch(() => dispatch(setIsError(true)));
};

export const sendFavoriteStatus = (id, status) => (dispatch, _getState, api) => {
  api
    .post(`${APIRoute.FAVORITES}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(status ? addToFavorite(data) : deleteFromFavorite(data));
      dispatch(updateOffers(data));
    });
};

