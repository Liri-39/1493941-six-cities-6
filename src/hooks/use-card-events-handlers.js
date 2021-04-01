import {useState} from "react";
import {changeActiveCard} from "../store/action";
import {useDispatch, useSelector} from "react-redux";
import {sendFavoriteStatus} from "../store/api-action";
import {useHistory} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../const";

export const useCardEventsHandler = (offer) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [favoriteStatus, setFavorite] = useState(offer.isFavorite);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const {activeCard} = useSelector((state) => state.MAIN);
  const id = offer.id;

  const cardMouseOver = (evt) => {
    evt.preventDefault();
    if (activeCard !== id) {
      dispatch(changeActiveCard(id));
    }
  };

  const cardMouseOut = () => {
    dispatch(changeActiveCard(null));
  };

  const handleClickFavorite = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(sendFavoriteStatus(id, !favoriteStatus));
      setFavorite(!favoriteStatus);
    } else {
      history.push(`${AppRoute.LOGIN_SCREEN}`);
    }
  };

  return [favoriteStatus, cardMouseOver, cardMouseOut, handleClickFavorite];
};
