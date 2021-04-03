import {createSelector} from "reselect";
import {NameSpace} from '../../reducer';
import {sortType} from "../../../const";
import {sortByPriceAsc, sortByPriceDesc, sortByRate} from "../../../utils";

export const getLocation = (state) => state[NameSpace.MAIN].location;
export const getOffers = (state) => state[NameSpace.MAIN].offers;
export const getSortType = (state) => state[NameSpace.MAIN].activeSortType;

export const getActiveOffers = createSelector(
    [getLocation, getOffers, getSortType],
    (location, offers, activeSortType) => {
      const offersDefault = offers.filter((item) => item.city.name === location.name);
      const offersCopy = offersDefault.slice();
      switch (activeSortType) {
        case sortType.popular:
          return offersCopy;
        case sortType.priceByAsc:
          return offersCopy.sort(sortByPriceAsc);
        case sortType.priceByDesc:
          return offersCopy.sort(sortByPriceDesc);
        case sortType.byRating:
          return offersCopy.sort(sortByRate);
        default:
          return offersDefault;
      }
    },
);
