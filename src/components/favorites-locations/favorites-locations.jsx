import React from 'react';
import PropTypes from "prop-types";
import FavoritesPlaces from "../favorites-places/favorites-places";
import {useSelector} from "react-redux";
import {getFavoritesOffers} from "../../store/data/favorite-data/selectors";

const FavoritesLocation = ({location}) => {
  const offers = useSelector(getFavoritesOffers);
  const offersByLocation = offers.slice().filter((item) => item.city.name === location);

  console.info(`<FavoritesLocation />: Render`);

  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{location}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {
        offersByLocation.map((offer) => <FavoritesPlaces offer={offer} key={offer[`id`]}/>)
      }
    </div>
  </li>;
};

FavoritesLocation.propTypes = {
  location: PropTypes.string.isRequired
};

export default FavoritesLocation;

