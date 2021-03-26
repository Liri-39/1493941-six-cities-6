import React from 'react';
import Card from "../card/card";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {CardType} from "../../const";

const NearPlaces = ({offers}) => {
  return <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {offers.map((item) => <Card
        offer={item}
        key={`near-places-${item.id}`}
        cardType={CardType.NEARPLACES}
      />)}
    </div>
  </section>;
};

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

export default NearPlaces;
