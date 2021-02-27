import React from 'react';
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import PropTypes from "prop-types";
import FavoritesPlacesComponent from "../favorites-places/favorites-places";

const FavoritesLocationList = (props) => {
  const {offers} = props;
  const {location} = props;
  return <>
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => <FavoritesPlacesComponent offer = {offer} key={offer[`id`]} />)
        }
      </div>
    </li>
  </>;
};

export default FavoritesLocationList;

FavoritesLocationList.propTypes = {
  location: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};
