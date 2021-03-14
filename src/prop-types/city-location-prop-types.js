import PropTypes from "prop-types";
import {locationPropTypes} from './location-prop-types';

export const cityLocationPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  location: locationPropTypes
});
