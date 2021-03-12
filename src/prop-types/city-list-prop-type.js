import PropTypes from "prop-types";

export const cityListPropTypes = PropTypes.shape({
  name: PropTypes.string,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
});
