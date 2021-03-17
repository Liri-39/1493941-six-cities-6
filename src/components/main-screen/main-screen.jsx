import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {offerPropTypes} from '../../prop-types/offer-prop-types';
import OffersList from '../offers-list/offers-list';
import Header from "../header/header";
import LocationsList from "../locations-list/locations-list";
import EmptyOffersList from "../empty-offers-list/empty-offers-list";
import Map from '../map/map';
import Sorter from "../sorter/sorter";
import {ActionCreator} from "../../store/action";
import {getSortOffers} from "../../utils";

const MainScreen = ({offers, location, activeSortType, changeSortType}) => {
  const handleClick = (newActiveSortType) => {
    if (activeSortType !== newActiveSortType) {
      changeSortType(newActiveSortType);
    }
  };
  return <div className="page page--gray page--main">
    <Header/>
    <main className={`page__main page__main--index ${offers.length === 0 ? `page__main--index-empty` : ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      <LocationsList/>
      {offers.length === 0 && <EmptyOffersList />}
      {offers.length > 0 && <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length > 0} place{offers.length > 0 && `s`} to stay in {location.name}</b>
            <Sorter onSortTypeSelect={handleClick}/>
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
  activeSortType: PropTypes.any,
  changeLocation: PropTypes.func,
  changeSortType: PropTypes.func
};

const mapStateToProps = ({offers, location, activeSortType, changeSortType}) => ({
  activeSortType,
  offers: getSortOffers(activeSortType, offers, location),
  location,
  changeSortType
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
