import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../header/header';
import Footer from "../footer/footer";
import FavoritesLocation from "../favorites-locations/favorites-locations";
import {fetchFavoriteList} from "../../store/api-action";
import LoadingScreen from "../loading-screen/loading-screen";
import withError from "../../hocs/with-error/with-error";
import {getFavoritesLocations} from "../../store/data/favorite-data/selectors";

const FavoritesScreen = () => {
  const favoritesLocation = useSelector(getFavoritesLocations);
  const {isFavoritesLoaded} = useSelector((state) => state.FAVORITE);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFavoritesLoaded) {
      dispatch(fetchFavoriteList());
    }
  }, [isFavoritesLoaded, dispatch]);

  if (!isFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const offersExist = Boolean(favoritesLocation.length);
  return <div className="page">
    {<Header/>}

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {
          offersExist && <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesLocation.map((city) => <FavoritesLocation location={city} key={city}/>)}
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

export {FavoritesScreen};
export default withError(FavoritesScreen);
