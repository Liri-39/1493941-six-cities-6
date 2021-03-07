import React, {useState} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

const OffersList = ({offers}) => {
  const [cardId, setCardId] = useState(null);

  const handleMouseOver = (newCardId) => {
    if (cardId !== newCardId) {
      setCardId(newCardId);
    }
  };

  const handleMouseOut = () => {
    setCardId(null);
  };

  return <div className="cities__places-list places__list tabs__content">
    {
      offers.map((offer) => <Card
        offer = {offer}
        key={offer.id}
        onCardMouseOver={handleMouseOver}
        onCardMouseOut={handleMouseOut}
      />)
    }
  </div>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default OffersList;
