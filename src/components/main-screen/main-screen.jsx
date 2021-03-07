import React from "react";
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types/offer-prop-types';
import OffersList from '../offers-list/offers-list';
import Header from "../header/header";
import LocationsList from "../locations-list/locations-list";
import Map from '../map/map';
import {mapPropTypes} from "../../prop-types/map-prop-types";

const MainScreen = ({offers, center}) => {
  return <div className="page page--gray page--main">
    <Header/>

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <LocationsList/>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"/>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <OffersList offers={offers}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                center={center}
                points={
                  offers.map((item) =>
                    Object.assign({}, {
                      title: item.title,
                      location: item.location,
                    }))
                }
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>;
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  center: PropTypes.arrayOf(PropTypes.number),
};

Map.propTypes = mapPropTypes;

export default MainScreen;
