import React from 'react';
import PropTypes from "prop-types";

const ReviewRatingItem = ({item, handleOnChange, rating, isDisabled}) => {
  return <>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      value={item.rating}
      id={`${item.rating}-stars`}
      type="radio"
      onChange={handleOnChange}
      checked={item.rating === rating}
      disabled={isDisabled}
    />
    <label
      htmlFor={`${item.rating}-stars`}
      className="reviews__rating-label form__rating-label"
      title={item.title}
    >
      <svg className="form__star-image" width="37" height="33" key={`${item.rating}-stars-svg`}>
        <use xlinkHref="#icon-star"/>
      </svg>
    </label>
  </>;
};

ReviewRatingItem.propTypes = {
  item: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleOnChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default React.memo(ReviewRatingItem);
