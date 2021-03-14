import React from 'react';
import Card from "../card/card";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

const NearPlaces = ({offers}) => {
  return <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {offers.map((item) => <Card
        offer={item}
        key={`near-places-${item.id}`}
      />)}
    </div>
  </section>;
};

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

const mapStateToProps = ({offers}) => ({
  offers: offers.slice(0, 3)
});

export default connect(mapStateToProps)(NearPlaces);
