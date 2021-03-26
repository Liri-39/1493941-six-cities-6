export const CityList = {
  Paris: {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  Cologne: {
    name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
  },
  Brussels: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
  },
  Amsterdam: {
    name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  Hamburg: {
    name: `Hamburg`,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
  },
  Dusseldorf: {
    name: `Dusseldorf`,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  }
};

export const SortType = {
  Popular: `Popular`,
  PriceByAsc: `Price: low to high`,
  PriceByDesc: `Price: high to low`,
  ByRate: `Top rated first`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  MAIN_SCREEN: `/`,
  LOGIN_SCREEN: `/login`,
  FAVORITES_SCREEN: `/favorites`,
  OFFER_SCREEN: `/offer/:id`,
  NOT_FOUND: `/404`
};

export const APIRoute = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  OFFERS: `/hotels`,
  COMMENTS: `/comments`,
  FAVORITES: `/favorite`
};

export const CardType = {
  MAIN: `cities__place-card`,
  NEARPLACES: `near-places__card`
};

export const MapType = {
  MAIN: `cities`,
  PROPERTY: `property`
};
