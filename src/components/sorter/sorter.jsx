import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sortType} from "../../const";

const Sorter = ({activeSortType, onSortTypeSelect}) => {
  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by </span>
    <span className="places__sorting-type" tabIndex="0">
      {activeSortType}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"/>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {Object.entries(sortType).map(([key, value]) => (
        <li className={`places__option ${activeSortType === key ? `places__option--active` : ``}`}
          key={key}
          tabIndex="0"
          onClick={(evt) => {
            evt.preventDefault();
            onSortTypeSelect(sortType[key]);
          }}
        > {value}</li>
      ))}
    </ul>
  </form>;
};

Sorter.propTypes = {
  sortType: PropTypes.any,
  activeSortType: PropTypes.any,
  onSortTypeSelect: PropTypes.func
};

const mapStateToProps = ({activeSortType}) => ({
  activeSortType,
});

export default connect(mapStateToProps, null)(Sorter);
