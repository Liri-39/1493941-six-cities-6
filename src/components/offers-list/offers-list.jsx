import React from "react";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Card from "../card/card";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {cityLocationPropTypes} from "../../prop-types/city-location-prop-types";
import {getSortOffers} from "../../utils";
import {CardType} from '../../const';

const OffersList = ({offers, activeCard, changeActiveCard}) => {
  const handleMouseOver = (newCardId) => {
    if (activeCard !== newCardId) {
      changeActiveCard(newCardId);
    }
  };

  const handleMouseOut = () => {
    changeActiveCard(null);
  };

  return <div className="cities__places-list places__list tabs__content">
    {
      offers.map((offer) => <Card
        offer={offer}
        key={offer.id}
        onCardMouseOver={handleMouseOver}
        onCardMouseOut={handleMouseOut}
        cardType={CardType.MAIN}
      />)
    }
  </div>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  location: cityLocationPropTypes,
  activeCard: PropTypes.number,
  changeActiveCard: PropTypes.func,
};

const mapStateToProps = ({offers, location, activeCard, changeActiveCard, activeSortType}) => ({
  offers: getSortOffers(activeSortType, offers, location),
  location,
  activeCard,
  changeActiveCard,
  activeSortType,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard(id) {
    dispatch(ActionCreator.changeActiveCard(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
