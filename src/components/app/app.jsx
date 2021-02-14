import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {offerPropTypes} from "../prop-types/offer-prop-types";

const App = (props) => {
  const {offers} = props;

  return (
    <Main offers={offers}/>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default App;
