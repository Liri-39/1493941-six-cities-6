import React, {useCallback} from "react";
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from "prop-types";
import {Link, useHistory} from "react-router-dom";
import {offerPropTypes} from '../../prop-types/offer-prop-types';
import {getRatingPercentage} from '../../utils';
import {CardType, AppRoute, AuthorizationStatus} from '../../const';
import {sendFavoriteStatus} from "../../store/api-action";

const Card = ({cardType, offer, mouseOutHandler, mouseOverHandler}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const {activeCard} = useSelector((state) => state.MAIN);
  const history = useHistory();
  const dispatch = useDispatch();

  const cardMouseOver = useCallback(() => {
    mouseOverHandler(activeCard, offer.id);
  }, [mouseOverHandler, activeCard, offer.id]);

  const cardMouseOut = useCallback(() => {
    mouseOutHandler(null);
  }, [mouseOutHandler]);

  const handleClickFavorite = () => {
    dispatch(sendFavoriteStatus(offer.id, !offer.isFavorite));
  };

  console.info(`<Card />: Render`);
  return <article
    className={`${cardType} place-card`}
    data-offer-id={offer.id}
    onMouseOver={cardType === CardType.MAIN ? cardMouseOver : () => {}}
    onMouseOut={cardType === CardType.MAIN ? cardMouseOut : () => {}}>
    {offer.isPremium &&
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${offer.id}`}>
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active button` : ``}`}
          type="button"
          onClick={() =>
            authorizationStatus === AuthorizationStatus.AUTH ?
              handleClickFavorite :
              history.push(`${AppRoute.LOGIN_SCREEN}`)
          }
        >
          <svg className={`place-card__bookmark-icon`} width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">{offer.isFavorite ? `In bookmarks` : `To bookmarks`}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: getRatingPercentage(offer.rating)}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

Card.propTypes = {
  offer: offerPropTypes.isRequired,
  cardType: PropTypes.string,
  mouseOutHandler: PropTypes.func,
  mouseOverHandler: PropTypes.func
};

export default Card;
