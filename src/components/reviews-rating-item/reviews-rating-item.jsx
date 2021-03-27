import React from 'react';
import PropTypes from "prop-types";

const ReviewsRatingItem = ({item, handleOnChange, rating}) => {
  return <>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      value={item.rating}
      id={`${item.rating}-stars`}
      type="radio"
      onChange={handleOnChange}
      checked={item.rating === rating}
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

ReviewsRatingItem.propTypes = {
  item: PropTypes.any.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ReviewsRatingItem;
