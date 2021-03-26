import React, {useState} from 'react';
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import {sendComment} from "../../store/api-action";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

const ReviewsForm = ({offer}) => {
  const [reviews, setComment] = useState({
    comment: ``,
    rating: null,
  });

  const sendForm = (evt) => {
    evt.preventDefault();
    sendComment(offer.id, reviews);
    setComment({
      comment: ``,
      rating: null,
    });
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
      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={handleCommentRatingChange}/>
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleCommentRatingChange}/>
      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleCommentRatingChange}/>
      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleCommentRatingChange}/>
      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleCommentRatingChange}/>
      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
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

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, comment) {
    dispatch(ActionCreator.sendComment(id, comment));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
