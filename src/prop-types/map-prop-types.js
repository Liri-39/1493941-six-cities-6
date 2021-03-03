import PropTypes from "prop-types";

export const mapPropTypes = {
  city: PropTypes.arrayOf(PropTypes.number),
  points: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }))
};
