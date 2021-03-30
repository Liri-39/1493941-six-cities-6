import React from 'react';
import PropTypes from "prop-types";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import FavoritesPlaces from "../favorites-places/favorites-places";
import {connect} from "react-redux";

const FavoritesLocation = ({offers, location}) => {
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
        offers.map((offer) => <FavoritesPlaces offer={offer} key={offer[`id`]}/>)
      }
    </div>
  </li>;
};

FavoritesLocation.propTypes = {
  location: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

const mapStateToProps = ({FAVORITE}) => ({
  offers: FAVORITE.favorites
});

export default connect(mapStateToProps, null)(FavoritesLocation);

