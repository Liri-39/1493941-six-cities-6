import React, {useState} from 'react';
import {connect} from "react-redux";
import {sendComment} from "../../store/api-action";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {createAPI} from "../../api/api";

const ReviewsForm = ({offer}) => {
  const STARS = [5, 4, 3, 2, 1];

  const [reviews, setComment] = useState({
    comment: ``,
    rating: null,
  });
  const api = createAPI();
  const sendForm = (evt) => {
    evt.preventDefault();
    api.post(`https://6.react.pages.academy/six-cities/comments/${offer.id}`, {comment: reviews.comment, rating: reviews.rating})
      .then((res) => {
        console.log(res.data);
      });
    sendComment(offer.id, {comment: reviews.comment, rating: reviews.rating});
    setComment({comment: ``, rating: null});
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
      {STARS.map((item) => {
        return <>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={item}
            id={`${item}-stars`}
            type="radio"
            onChange={handleCommentRatingChange}
            checked={item === reviews.rating}
            key={`${item}-stars-input`}
          />
          <label
            htmlFor={`${item}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
            key={`${item}-stars-label`}
          >
            <svg className="form__star-image" width="37" height="33" key={`${item}-stars-svg`}>
              <use xlinkHref="#icon-star" key={`${item}-stars`}/>
            </svg>
          </label>
        </>;
      })
      }
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
