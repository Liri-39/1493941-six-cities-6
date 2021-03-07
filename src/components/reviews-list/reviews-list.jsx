import React from 'react';
import PropTypes from 'prop-types';
import {reviewsPropTypes} from "../../prop-types/reviews-prop-types";
import ReviewsForm from "../reviews-form/reviews-form";
import ReviewsItem from "../review-item/reviews-item";

const ReviewsList = ({comments}) => {
  const reviews = comments;
  const reviewsCount = reviews.length;
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
    <ul className="reviews__list">
      {reviews.map((item) => <ReviewsItem review={item} key={`review-${item.id}`}/>)}
    </ul>
    {<ReviewsForm/>}
  </section>;
};

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(reviewsPropTypes).isRequired
};

export default ReviewsList;
