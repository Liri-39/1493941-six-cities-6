import Card from "../card/card";
import React, {useState} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

const OffersList = ({offers}) => {
  const [, setCardId] = useState(null);
  const getCardId = (id) => {
    setCardId(id);
  };

  return <React.Fragment>
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <Card offer = {offer} onHover={getCardId} key={offer.id} />)
      }
    </div>
  </React.Fragment>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default OffersList;
