import React, {useMemo} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Card from "../card/card";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {cityLocationPropTypes} from "../../prop-types/city-location-prop-types";
import {getSortOffers} from "../../utils";
import {CardType} from '../../const';

const OffersList = ({offers}) => {
  console.info(`<OffersList />: Render`);

  const locationOffers = useMemo(
      () => offers,
      [offers]
  );

  return <div className="cities__places-list places__list tabs__content">
    {
      locationOffers.map((offer) => <Card
        offer={offer}
        key={offer.id}
        cardType={CardType.MAIN}
      />)
    }
  </div>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  location: cityLocationPropTypes,
};

const mapStateToProps = ({offers, location, activeSortType}) => ({
  offers: getSortOffers(activeSortType, offers, location),
  location,
  activeSortType,
});

export default connect(mapStateToProps, null)(OffersList);
