export function countPrice(coef, rooms, roomsCount) {
  const price =
    coef *
    (rooms.standart.price * roomsCount.standart +
      rooms.big.price * roomsCount.big +
      rooms.toilet.price * roomsCount.toilet);
  return price;
}

export function countTime(coef, rooms, roomsCount) {
  const time =
    coef *
    (rooms.standart.time * roomsCount.standart +
      rooms.big.time * roomsCount.big +
      rooms.toilet.time * roomsCount.toilet);
  return time;
}

export function averageRating(reviews) {
  let ratting = 0;
  ratting = reviews.reduce((sum, review) => {
    return sum + review.ratting;
  }, 0);
  const middle = Math.round((ratting / reviews.length) * 10) / 10;
  return middle;
};

module.exports.middlePriceForCompany = (rooms, services) => {
  let middlePrice = services.reduce((price, service) => {
    price += +service.coefficient;
    return price;
  }, 0);
  middlePrice *= rooms.toilet.price + rooms.standart.price + rooms.big.price;
  middlePrice = Math.round((middlePrice / 3) * 100) / 100;
  return middlePrice;
};
