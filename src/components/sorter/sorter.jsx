import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {changeSortType} from "../../store/action";

const Sorter = () => {
  const [isSorterOpen, setIsSorterOpen] = useState(false);
  const {activeSortType, sortType} = useSelector((state) => state.MAIN);

  const dispatch = useDispatch();

  const handleClick = (evt, newActiveSortType) => {
    evt.preventDefault();
    dispatch(changeSortType(newActiveSortType));
  };

  const handleHoverForm = (evt) => {
    evt.preventDefault();
    setIsSorterOpen(!isSorterOpen);
  };

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

export default Sorter;
