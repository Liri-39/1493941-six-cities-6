import React from 'react';
import Card from "../card/card";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

const NearPlaces = ({nearby}) => {
  const offers = nearby;
  return <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {offers.map((item) => <Card offer={item} key={`near-places-${item.id}`}/>)}
    </div>
  </section>;
};

NearPlaces.propTypes = {
  nearby: offerPropTypes,
};

export default NearPlaces;
