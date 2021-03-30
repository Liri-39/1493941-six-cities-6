import React, {useMemo} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Card from "../card/card";
import {CardType} from '../../const';
import {getActiveOffers} from "../../store/data/main-data/selector";
import {changeActiveCard} from "../../store/action";

const OffersList = () => {
  console.info(`<OffersList />: Render`);
  const dispatch = useDispatch();
  const offers = useSelector(getActiveOffers);

  const locationOffers = useMemo(
      () => offers,
      [offers]
  );

  const mouseOutHandler = () => {
    dispatch(changeActiveCard(null));
  };

  const mouseOverHandler = (activeCard, id) => {
    if (activeCard !== id) {
      dispatch(changeActiveCard(id));
    }
  };

  return <div className="cities__places-list places__list tabs__content">
    {
      locationOffers.map((offer) => <Card
        offer={offer}
        key={offer.id}
        cardType={CardType.MAIN}
        mouseOutHandler={mouseOutHandler}
        mouseOverHandler={mouseOverHandler}
      />)
    }
  </div>;
};

export default OffersList;
