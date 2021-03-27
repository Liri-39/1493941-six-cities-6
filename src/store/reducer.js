import {combineReducers} from 'redux';
import {user} from './user/user';
import {mainData} from './data/main-data/main-data';
import {offerData} from "./data/offer-data/offer-data";
import {favoriteData} from "./data/favorite-data/favorite-data";

export const NameSpace = {
  MAIN: `MAIN`,
  USER: `USER`,
  OFFER: `OFFER`,
  FAVORITE: `FAVORITE`
};

export default combineReducers({
  [NameSpace.MAIN]: mainData,
  [NameSpace.OFFER]: offerData,
  [NameSpace.FAVORITE]: favoriteData,
  [NameSpace.USER]: user,
});
