import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {sendComment} from "../../store/api-action";
import ReviewRatingItem from "../review-rating-item/review-rating-item";
import {ratings, CommentLength} from "../../const";
import {setIsError} from "../../store/action";

const ReviewForm = () => {

  const [reviews, setComment] = useState({
    comment: ``,
    rating: 0,
  });

  const dispatch = useDispatch();
  const {id} = useParams();
  const {isDisabled} = useSelector((state) => state.OFFER);
  const {isError} = useSelector((state) => state.MAIN);
  const {comment, rating} = reviews;

  useEffect(() => {
    if (isError) {
      setTimeout(() => dispatch(setIsError(false)), 5000);
    }
  }, [isError]);

  useEffect(() => {
    if (!isError && !isDisabled) {
      setComment(() => ({
        comment: ``,
        rating: 0
      }));
    }
  }, [isError, isDisabled]);

  const sendForm = (evt) => {
    evt.preventDefault();
    dispatch(sendComment(id, {comment, rating}));
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
          disabled={isDisabled}
        />
      )}
    </div>
    {isError && <div>Sorry, please try again </div>}
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={reviews.comment}
      onChange={handleCommentTextChange}
      maxLength={CommentLength.MAX}
      disabled={isDisabled}
      required
    />
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
        with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button
        className="reviews__submit form__submit button"
        type="submit"
        disabled={reviews.comment.length < CommentLength.MIN || reviews.rating === 0 }
        onClick={sendForm}
      >Submit</button>
    </div>
  </form>;
};

export default ReviewForm;
