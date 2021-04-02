import React from 'react';
import {useSelector} from "react-redux";
import ReviewsForm from "../review-form/review-form";
import ReviewItem from "../review-item/review-item";
import {AuthorizationStatus} from "../../const";
import {getComments, getLastComments} from "../../store/data/offer-data/selectors";

const ReviewsList = () => {

  const {authorizationStatus} = useSelector((state) => state.USER);
  const lastReviews = useSelector(getLastComments);
  const reviews = useSelector(getComments);
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {lastReviews.map((item) => <ReviewItem review={item} key={`review-${item.id}`}/>)}
    </ul>
    {authorizationStatus === AuthorizationStatus.AUTH && <ReviewsForm/>}
  </section>;
};

export default ReviewsList;
