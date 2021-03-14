import PropTypes from "prop-types";
import {cityLocationPropTypes} from './city-location-prop-types';

export const mapPropTypes = {
  location: cityLocationPropTypes,
  offer: PropTypes.object,
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  })),
  activeCard: PropTypes.number,
};
