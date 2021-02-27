import React from 'react';
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import PropTypes from "prop-types";
import HeaderComponent from '../header/header';
import FooterComponent from "../footer/footer";
import FavoritesEmptyComponent from "../favorites-empty/favorites-empty";
import FavoritesLocationList from "../favorites-locations/favorites-locations";

const FavoritesComponent = ({offers, location}) => {
  return <>
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        { location.map((city) => <FavoritesLocationList offers = {offers.filter((offer) => (offer.city.name === city))} location = {city} key = {city}/>)}
      </ul>
    </section>
  </>;
};

const FavoritesScreen = ({offers}) => {
  const favoritesOffers = offers.filter((offer) => (offer.isFavorite));
  const favoritesLocation = [...new Set(favoritesOffers.map((offer) => (offer.city.name)))];
  return <React.Fragment>
    <div className="page">
      {<HeaderComponent />}

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritesOffers.length > 0 ? <FavoritesComponent offers = {favoritesOffers} location={favoritesLocation} /> : <FavoritesEmptyComponent />}
        </div>
      </main>

      {<FooterComponent />}
    </div>
  </React.Fragment>;
};

export default FavoritesScreen;

FavoritesComponent.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  location: PropTypes.array
};

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};
