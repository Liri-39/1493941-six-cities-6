import {SortType} from "./mocks/const";

export const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        isFavorite: offer[`is_favorite`],
        isPremium: offer[`is_premium`],
        host: {
          id: offer.host.id,
          name: offer.host.name,
          isPro: offer.host[`is_pro`],
          avatarUrl: offer.host[`avatar_url`]
        },
        maxAdults: offer[`max_adults`],
        previewImage: offer[`preview_image`],
      },
  );

  delete adaptedOffer[`is_favorite`];
  delete adaptedOffer[`is_premium`];
  delete adaptedOffer[`max_adults`];
  delete adaptedOffer[`preview_image`];
  delete adaptedOffer.host[`is_pro`];
  delete adaptedOffer.host[`avatar_url`];

  return adaptedOffer;
};

const ONE_STAR_PERCENT = 20;

export const getRatingPercentage = (rating) => `${Math.round(rating) * ONE_STAR_PERCENT}%`;

const sortByPriceAsc = (pointA, pointB) => pointA.price - pointB.price;
const sortByPriceDesc = (pointA, pointB) => pointB.price - pointA.price;
const sortByRate = (pointA, pointB) => pointB.rating - pointA.rating;

export const getSortOffers = (activeSortType, offers, location) => {
  const offersDefault = offers.filter((item) => item.city.name === location.name);
  const offersCopy = offersDefault.slice();
  switch (activeSortType) {
    case SortType.Popular:
      return offersCopy;
    case SortType.PriceByAsc:
      return offersCopy.sort(sortByPriceAsc);
    case SortType.PriceByDesc:
      return offersCopy.sort(sortByPriceDesc);
    case SortType.ByRate:
      return offersCopy.sort(sortByRate);
    default:
      return offersDefault;
  }
};
