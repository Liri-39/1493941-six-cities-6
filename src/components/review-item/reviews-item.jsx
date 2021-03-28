import React from 'react';
import {reviewsPropTypes} from "../../prop-types/reviews-prop-types";
import {getRatingPercentage} from "../../utils";

const ReviewsItem = ({review}) => {
  console.info(`<ReviewsItem />: Render`);
  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">{review.user.name}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: getRatingPercentage(review.rating)}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.comment}
      </p>
      <time className="reviews__time" dateTime={review.date}>{review.date}</time>
    </div>
  </li>;
};

ReviewsItem.propTypes = {
  review: reviewsPropTypes
};
export default ReviewsItem;
