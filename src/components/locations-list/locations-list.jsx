import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as ActionCreator from "../../store/action";

const LocationsList = () => {
  const dispatch = useDispatch();
  const {location, cityList} = useSelector((state) => state.MAIN);

  const onCityClick = (evt, city) => {
    evt.preventDefault();
    dispatch(ActionCreator.changeLocation(city));
  };

  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(cityList).map((item) =>
          <li className="locations__item" key={item.name} >
            <a className={`locations__item-link tabs__item ${location.name === item.name ? `tabs__item--active` : ``}`}
              href="#"
              onClick={(evt) => onCityClick(evt, cityList[item.name])}
            >
              <span>{item.name}</span>
            </a>
          </li>)
        }
      </ul>
    </section>
  </div>;
};

export default LocationsList;
