export const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        isFavorite: offer[`is_favorite`],
        isPremium: offer[`is_premium`],
        host: {
          id: offer.host.id,
          name: offer.host.name,
          isPro: offer.host[`is_pro`],
          avatarUrl: offer.host[`avatar_url`]
        },
        maxAdults: offer[`max_adults`],
        previewImage: offer[`preview_image`],
      },
  );

  delete adaptedOffer[`is_favorite`];
  delete adaptedOffer[`is_premium`];
  delete adaptedOffer[`max_adults`];
  delete adaptedOffer[`preview_image`];
  delete adaptedOffer.host[`is_pro`];
  delete adaptedOffer.host[`avatar_url`];

  return adaptedOffer;
};

export const adaptCommentsToClient = (comment) => {
  const adaptedComment = Object.assign(
      {},
      comment,
      {
        user: {
          id: comment.user.id,
          name: comment.user.name,
          isPro: comment.user[`is_pro`],
          avatarUrl: comment.user[`avatar_url`]
        },
      },
  );

  delete adaptedComment.user[`is_pro`];
  delete adaptedComment.user[`avatar_url`];

  return adaptedComment;
};

const ONE_STAR_PERCENT = 20;

export const getRatingPercentage = (rating) => `${Math.round(rating) * ONE_STAR_PERCENT}%`;

export const sortByPriceAsc = (offerA, offerB) => offerA.price - offerB.price;
export const sortByPriceDesc = (offerA, offerB) => offerB.price - offerA.price;
export const sortByRate = (offerA, offerB) => offerB.rating - offerA.rating;

export const adaptAuthDataToClient = (data) => {
  const adaptedAuthInfo = Object.assign(
      {},
      data,
      {
        isPro: data[`is_pro`],
        avatarUrl: data[`avatar_url`]
      },
  );

  delete adaptedAuthInfo[`is_pro`];
  delete adaptedAuthInfo[`avatar_url`];

  return adaptedAuthInfo;
};
