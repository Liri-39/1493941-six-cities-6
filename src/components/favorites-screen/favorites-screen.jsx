import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../header/header';
import Footer from "../footer/footer";
import FavoritesLocation from "../favorites-locations/favorites-locations";
import {fetchFavoriteList} from "../../store/api-action";
import LoadingScreen from "../loading-screen/loading-screen";

const FavoritesScreen = () => {
  console.info(`<FavoritesScreen />: Render`);
  const offers = useSelector((state) => state.FAVORITE.favorites);
  const {isFavoritesLoaded} = useSelector((state) => state.FAVORITE);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!isFavoritesLoaded) {
      dispatch(fetchFavoriteList());
    }
  }, [isFavoritesLoaded]);

  if (!isFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }
  const favoritesLocation = [...new Set(offers.map((offer) => (offer.city.name)))];
  const offersExist = Boolean(offers.length);
  return <div className="page">
    {<Header/>}

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {
          offersExist && <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesLocation.map((city) => <FavoritesLocation
                offers={offers.filter((offer) => (offer.city.name === city))} location={city} key={city}/>)}
            </ul>
          </section>
        }
        {
          !offersExist && <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        }
      </div>
    </main>

    <Footer/>
  </div>;
};

export default FavoritesScreen;
