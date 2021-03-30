import React, {useState} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sortType} from "../../const";
import {changeSortType} from "../../store/action";

const Sorter = ({activeSortType, onSorterClick}) => {
  const [isSorterOpen, setIsSorterOpen] = useState(false);

  const handleClick = (evt, newActiveSortType) => {
    evt.preventDefault();
    onSorterClick(newActiveSortType);
  };

  const handleHoverForm = (evt) => {
    evt.preventDefault();
    setIsSorterOpen(!isSorterOpen);
  };

  console.info(`<Sorter />: Render`);
  return <form className="places__sorting" action="#" method="get" onClick={handleHoverForm}>
    <span className="places__sorting-caption">Sort by </span>
    <span className="places__sorting-type" tabIndex="0">
      {activeSortType}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"/>
      </svg>
    </span>
    {isSorterOpen &&
    <ul className="places__options places__options--custom places__options--opened">
      {Object.entries(sortType).map(([key, value]) =>
        <li className={`places__option ${activeSortType === sortType[key] ? `places__option--active` : ``}`}
          key={key}
          tabIndex="0"
          onClick={(evt) => handleClick(evt, sortType[key])}
        > {value}</li>
      )
      }
    </ul>
    }
  </form>;
};

Sorter.propTypes = {
  sortType: PropTypes.any,
  activeSortType: PropTypes.any,
  onSorterClick: PropTypes.func
};

const mapStateToProps = ({MAIN}) => ({
  activeSortType: MAIN.activeSortType
});

const mapDispatchToProps = (dispatch) => ({
  onSorterClick(newActiveSortType) {
    dispatch(changeSortType(newActiveSortType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
