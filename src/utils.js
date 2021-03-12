export const adaptToClient = (offer) => {
  const {avatar_url: avatarUrl, id: idHost, is_pro: isPro, name: nameHost} = offer.host;

  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        offerHost: {
          avatarUrl,
          idHost,
          isPro,
          nameHost
        },
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image,
      },
  );

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.host;

  return adaptedOffer;
};

const ONE_STAR_PERCENT = 20;

export const getRatingPercentage = (rating) => `${Math.round(rating) * ONE_STAR_PERCENT}%`;
