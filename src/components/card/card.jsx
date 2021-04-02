import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerPropTypes} from '../../prop-types/offer-prop-types';
import {getRatingPercentage} from '../../utils';
import {CardType} from '../../const';
import {useCardEventsHandler} from '../../hooks/use-card-events-handlers';

const Card = ({cardType, offer}) => {
  const [favoriteStatus, cardMouseOver, cardMouseOut, handleClickFavorite] = useCardEventsHandler(offer);

  return <article
    className={`${cardType} place-card`}
    data-offer-id={offer.id}
    onMouseEnter={cardType === CardType.MAIN ? cardMouseOver : () => {}}
    onMouseLeave={cardType === CardType.MAIN ? cardMouseOut : () => {}}>
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
          className={`place-card__bookmark-button button ${favoriteStatus ? `place-card__bookmark-button--active` : ``}`}
          type="button"
          onClick={() => handleClickFavorite()}
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
  cardType: PropTypes.string
};

export default Card;
