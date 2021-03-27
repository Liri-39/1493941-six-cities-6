import React from "react";
import {useSelector} from 'react-redux';
import Card from "../card/card";
import {CardType} from '../../const';
import {getActiveOffers} from "../../store/data/main-data/selectors";

const OffersList = () => {
  const offers = useSelector(getActiveOffers);

  return <div className="cities__places-list places__list tabs__content">
    {
      offers.map((offer) => <Card
        offer={offer}
        key={offer.id}
        cardType={CardType.MAIN}
      />)
    }
  </div>;
};

export default OffersList;
