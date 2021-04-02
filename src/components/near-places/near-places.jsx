import React from 'react';
import Card from "../card/card";
import {CardType} from "../../const";
import {useSelector} from "react-redux";
import {NameSpace} from "../../store/reducer";

const NearPlaces = () => {
  const {nearPlaces} = useSelector((state) => state[NameSpace.OFFER]);

  return <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {nearPlaces.map((item) => <Card
        offer={item}
        key={`near-places-${item.id}`}
        cardType={CardType.NEARPLACES}
      />)}
    </div>
  </section>;
};

export default NearPlaces;
