import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getActiveOffers} from '../../store/data/main-data/selector';
import OffersList from '../offers-list/offers-list';
import Header from "../header/header";
import LocationsList from "../locations-list/locations-list";
import EmptyOffersList from "../empty-offers-list/empty-offers-list";
import Map from '../map/map';
import Sorter from "../sorter/sorter";
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOfferList} from "../../store/api-action";
import {MapType} from '../../const';

const MainScreen = () => {
  console.info(`<MainScreen />: Render`);

  const {isDataLoaded, location} = useSelector((state) => state.MAIN);
  const offers = useSelector(getActiveOffers);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchOfferList());
    }
  }, [isDataLoaded, dispatch]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
            <b className="places__found">{offers.length} place{offers.length > 0 && `s`} to stay in {location.name}</b>
            <Sorter />
            <OffersList />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map mapType={MapType.MAIN}/>
            </section>
          </div>
        </div>
      </div>}
    </main>
  </div>;
};

export default MainScreen;
