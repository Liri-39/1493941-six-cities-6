import {createSelector} from "reselect";
import {NameSpace} from '../../reducer';

export const getFavoritesOffers = (state) => state[NameSpace.FAVORITE].favorites;

export const getFavoritesLocation = createSelector(
    getFavoritesOffers,
    (favorites) => {
      return [...new Set(favorites.map((offer) => (offer.city.name)))];
    },
);
