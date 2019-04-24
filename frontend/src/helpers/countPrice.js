export function countPrice(company_services, service, rooms, roomsCount) {
  const coef = company_services.find(o => o.name === service).coefficient;
  const price =
    coef *
    (rooms.standart.price * roomsCount.standart +
      rooms.big.price * roomsCount.big +
      rooms.toilet.price * roomsCount.toilet);
  return price;
}

export function countTime(company_services, service, rooms, roomsCount) {
  const coef = company_services.find(o => o.name === service).coefficient;
  const time =
    coef *
    (rooms.standart.time * roomsCount.standart +
      rooms.big.time * roomsCount.big +
      rooms.toilet.time * roomsCount.toilet);
  return time;
}
