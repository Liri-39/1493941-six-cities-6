import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {offerPropTypes} from '../../prop-types/offer-prop-types';
import OffersList from '../offers-list/offers-list';
import Header from "../header/header";
import LocationsList from "../locations-list/locations-list";
import EmptyOffersList from "../empty-offers-list/empty-offers-list";
import Map from '../map/map';

const MainScreen = ({offers, location}) => {
  const offersCount = offers.length;
  return <div className="page page--gray page--main">
    <Header/>
    <main className={`page__main page__main--index ${offersCount === 0 ? `page__main--index-empty` : ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      <LocationsList/>
      {Boolean(!offersCount) && <EmptyOffersList />}
      {Boolean(offersCount) && <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} place{Boolean(offersCount) && `s`} to stay in {location.name}</b>
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
            <OffersList />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map />
            </section>
          </div>
        </div>
      </div>}
    </main>
  </div>;
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  location: PropTypes.object,
  changeLocation: PropTypes.func
};

const mapStateToProps = ({offers, location}) => ({
  offers: offers.filter((item) => item.city.name === location.name),
  location
});

export default connect(mapStateToProps, null)(MainScreen);
