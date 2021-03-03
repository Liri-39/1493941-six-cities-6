import React, {useState} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

const OffersList = ({offers}) => {
  const [cardId, setCardId] = useState(null);

  const handlerOfferCardHover = (e) => {
    e.preventDefault();
    let target = e.target.closest(`[data-offer-id]`);
    if (!target) {
      return;
    }
    if (cardId !== target.dataset.offerId) {
      setCardId(target.dataset.offerId);
    }
  };

  const handlerOfferCardHoverOut = (e) => {
    e.preventDefault();
    setCardId(null);
  };

  return <div className="cities__places-list places__list tabs__content" onMouseOver={handlerOfferCardHover} onMouseOut={handlerOfferCardHoverOut}>
    {
      offers.map((offer) => <Card offer = {offer} key={offer.id} />)
    }
  </div>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default OffersList;
