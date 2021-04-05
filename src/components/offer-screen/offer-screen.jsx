import React, {useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Header from "../header/header";
import NearPlaces from "../near-places/near-places";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import {getRatingPercentage} from '../../utils';
import {fetchOffer, fetchNearOffers, fetchComments, sendFavoriteStatus} from "../../store/api-action";
import LoadingScreen from "../loading-screen/loading-screen";
import withError from "../../hocs/with-error/with-error";
import {AppRoute, AuthorizationStatus, MapType} from '../../const';
import {NameSpace} from "../../store/reducer";
import {MAX_IMG_COUNT} from "../../const";
import {getAuthorizationStatus} from "../../store/user/selectors";

const OfferScreen = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchNearOffers(id));
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  const {
    offer,
    isOfferLoaded,
  } = useSelector((state) => state[NameSpace.OFFER]);

  if ((offer === null) || (isOfferLoaded && Number(offer.id) !== Number(id))) {
    return (
      <LoadingScreen/>
    );
  }

  return <div className="page">
    {<Header/>}
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.slice(0, MAX_IMG_COUNT).map((image, i) => (
              <div className="property__image-wrapper" key={`${offer.id}-${i}-photo`}>
                <img className="property__image" src={image} alt="Photo studio"/>
              </div>))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium &&
            <div className="property__mark">
              <span>Premium</span>
            </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <button
                className={`property__bookmark-button button ${offer.isFavorite ? `property__bookmark-button--active` : ``}`}
                type="button"
                onClick={() => {
                  if (authorizationStatus === AuthorizationStatus.AUTH) {
                    dispatch(sendFavoriteStatus(offer.id, !offer.isFavorite));
                  } else {
                    history.push(`${AppRoute.LOGIN_SCREEN}`);
                  }
                }}
              >
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: getRatingPercentage(offer.rating)}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.goods.map((good, i) => (
                  <li className="property__inside-item" key={`${offer.id}-${i}-good`}>
                    {good}
                  </li>))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div
                  className={`property__avatar-wrapper ${offer.host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                  <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">{offer.host.name}</span>
                {offer.host.isPro &&
                <span className="property__user-status">
                    Pro
                </span>
                }
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <ReviewsList/>
          </div>
        </div>
        <section className="property__map map">
          <Map mapType={MapType.PROPERTY}/>
        </section>
      </section>
      <div className="container">
        <NearPlaces/>
      </div>
    </main>
  </div>;
};

export {OfferScreen};
export default withError(OfferScreen);
