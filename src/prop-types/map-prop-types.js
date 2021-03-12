import PropTypes from "prop-types";

export const mapPropTypes = {
  location: PropTypes.object,
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }))
};
