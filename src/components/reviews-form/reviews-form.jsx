import React, {useState} from 'react';
import {connect} from "react-redux";
import {sendComment} from "../../store/api-action";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {createAPI} from "../../api/api";
import ReviewsRatingItem from "../reviews-rating-item/reviews-rating-item";

const ReviewsForm = ({offer}) => {
  const STARS = [
    {rating: 5, title: `perfect`},
    {rating: 4, title: `good`},
    {rating: 3, title: `not bad`},
    {rating: 2, title: `badly`},
    {rating: 1, title: `terribly`},
  ];

  const [reviews, setComment] = useState({
    comment: ``,
    rating: 0,
  });
  const api = createAPI();
  const sendForm = (evt) => {
    evt.preventDefault();
    api.post(`https://6.react.pages.academy/six-cities/comments/${offer.id}`, {comment: reviews.comment, rating: reviews.rating})
      .then((res) => {
        console.log(res.data);
      });
    sendComment(offer.id, {comment: reviews.comment, rating: reviews.rating});
    setComment({comment: ``, rating: 0});
  };

  const handleCommentRatingChange = (evt) => {
    setComment({
      ...reviews,
      rating: parseFloat(evt.target.value),
    });
  };

  const handleCommentTextChange = (evt) => {
    setComment({
      ...reviews,
      comment: evt.target.value,
    });
  };

  return <form className="reviews__form form" action="#" method="post" onSubmit={sendForm}>
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating">
      {STARS.map((item) =>
        <ReviewsRatingItem
          item={item}
          handleOnChange={handleCommentRatingChange}
          rating={reviews.rating}
          key={`${item.rating}-stars`}
        />
      )}
    </div>
    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={reviews.comment} onChange={handleCommentTextChange} required/>
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
        with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled="" onClick={sendForm}>Submit</button>
    </div>
  </form>;
};

ReviewsForm.propTypes = {
  offer: offerPropTypes,
};

const mapStateToProps = ({offer}) => ({
  offer,
});

export default connect(mapStateToProps, null)(ReviewsForm);
