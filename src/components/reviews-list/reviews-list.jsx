import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {reviewsPropTypes} from "../../prop-types/reviews-prop-types";
import ReviewsForm from "../review-form/review-form";
import ReviewsItem from "../review-item/reviews-item";
import {AuthorizationStatus} from "../../const";

const ReviewsList = ({comments, authorizationStatus}) => {
  const reviews = comments;
  const reviewsCount = reviews.length;
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
    <ul className="reviews__list">
      {reviews.map((item) => <ReviewsItem review={item} key={`review-${item.id}`}/>)}
    </ul>
    {authorizationStatus === AuthorizationStatus.AUTH && <ReviewsForm/>}
  </section>;
};

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(reviewsPropTypes).isRequired,
  authorizationStatus: PropTypes.string
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus
});

export default connect(mapStateToProps)(ReviewsList);
