import React from 'react';
import {useSelector} from "react-redux";
import ReviewsForm from "../review-form/review-form";
import ReviewsItem from "../review-item/reviews-item";
import {AuthorizationStatus} from "../../const";
import {getComments, getLastComments} from "../../store/data/offer-data/selectors";

const ReviewsList = () => {
  console.info(`<ReviewsList />: Render`);

  const {authorizationStatus} = useSelector((state) => state.USER);
  const reviews = useSelector(getLastComments);
  const reviewsCount = useSelector(getComments).length;
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
    <ul className="reviews__list">
      {reviews.map((item) => <ReviewsItem review={item} key={`review-${item.id}`}/>)}
    </ul>
    {authorizationStatus === AuthorizationStatus.AUTH && <ReviewsForm/>}
  </section>;
};

export default ReviewsList;
