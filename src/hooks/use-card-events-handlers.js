import {useState, useCallback} from "react";
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

  const cardMouseOver = useCallback((evt) => {
    evt.preventDefault();
    if (activeCard !== offer.id) {
      dispatch(changeActiveCard(offer.id));
    }
  }, [activeCard, offer.id, dispatch]);

  const cardMouseOut = useCallback(() => {
    dispatch(changeActiveCard(null));
  }, [dispatch]);

  const handleClickFavorite = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(sendFavoriteStatus(offer.id, !favoriteStatus));
      setFavorite(!favoriteStatus);
    } else {
      history.push(`${AppRoute.LOGIN_SCREEN}`);
    }
  };

  return [favoriteStatus, cardMouseOver, cardMouseOut, handleClickFavorite];
};
