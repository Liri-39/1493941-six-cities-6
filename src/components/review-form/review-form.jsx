import React, {useState} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendComment} from "../../store/api-action";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import ReviewRatingItem from "../review-rating-item/review-rating-item";
import {ratings} from "../../const";

const ReviewForm = ({offer, onSubmit}) => {
  const [reviews, setComment] = useState({
    comment: ``,
    rating: 0,
  });

  const sendForm = (evt) => {
    evt.preventDefault();
    onSubmit(
        offer.id,
        {
          comment: reviews.comment,
          rating: reviews.rating,
        }
    );

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
      {ratings.map((item) =>
        <ReviewRatingItem
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

ReviewForm.propTypes = {
  offer: offerPropTypes,
  onSubmit: PropTypes.func
};

const mapStateToProps = ({offer}) => ({
  offer,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, {comment, rating}) {
    dispatch(sendComment(id, {comment, rating}));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
