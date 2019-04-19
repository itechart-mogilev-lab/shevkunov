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
