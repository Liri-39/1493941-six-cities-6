import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {ActionCreator} from '../../store/action';
import {cityLocationPropTypes} from '../../prop-types/city-location-prop-types';

const LocationsList = ({location, cityList, changeLocation}) => {

  const onCityClick = (evt, city) => {
    evt.preventDefault();
    changeLocation(city);
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

LocationsList.propTypes = {
  location: cityLocationPropTypes,
  cityList: PropTypes.object.isRequired,
  changeLocation: PropTypes.func.isRequired
};

const mapStateToProps = ({location, cityList}) => ({
  location,
  cityList
});

const mapDispatchToProps = (dispatch) => ({
  changeLocation(location) {
    dispatch(ActionCreator.changeLocation(location));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
