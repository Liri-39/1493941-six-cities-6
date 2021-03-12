import React, {useState} from "react";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Card from "../card/card";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

const OffersList = ({offers, changeActiveCard}) => {
  const [cardId, setCardId] = useState(null);

  const handleMouseOver = (newCardId) => {
    if (cardId !== newCardId) {
      setCardId(newCardId);
      changeActiveCard(newCardId);
    }
  };

  const handleMouseOut = () => {
    setCardId(null);
    changeActiveCard(null);
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
  location: PropTypes.object,
  changeActiveCard: PropTypes.func
};

const mapStateToProps = ({offers, location, changeActiveCard}) => ({
  offers: offers.filter((item) => item.city.name === location.name),
  location,
  changeActiveCard
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard(id) {
    dispatch(ActionCreator.changeActiveCard(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
