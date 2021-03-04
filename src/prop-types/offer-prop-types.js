import PropTypes from 'prop-types';


export const locationPropTypes = PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
});

export const cityPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  location: locationPropTypes,
});

export const offerPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  city: cityPropTypes,
});
