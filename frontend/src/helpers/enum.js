export const sortType = [
  {
    value: "",
    name: ""
  },
  { value: "price_asc", name: "Price ascending" },
  { value: "price_desc", name: "Price descending" },
  { value: "rating_asc", name: "Rating ascending" },
  { value: "rating_desc", name: "Rating descending" },
  { value: "popularity_asc", name: "Popularity ascending" },
  { value: "popularity_desc", name: "Popularity descending" }
];

export const selectCity = [
  { value: "", name: "Все города" },
  { value: "Могилев", name: "Могилев" },
  { value: "Витебск", name: "Витебск" },
  { value: "Гродно", name: "Гродно" },
  { value: "Минcк", name: "Минcк" },
  { value: "Гомель", name: "Гомель" },
  { value: "Брест", name: "Брест" }
];

export const selectService = [
  { value: "", name: "", _id: 0 },
  { value: "Standart", name: "Standart", _id: 1 },
  { value: "Total", name: "Total", _id: 2 },
  { value: "After_repair", name: "After repair", _id: 3 },
  { value: "Chemical_for_carpets", name: "Chemical for carpets", _id: 4 },
  { value: "Office", name: "Office", _id: 5 },
  { value: "Chemical_for_furniture", name: "Chemical for furniture", _id: 6 },
  { value: "Pool", name: "Pool", _id: 7 }
];

export const selectRegularity = [
  { value: "", name: "", key: 0 },
  { value: "one_time", name: "One time", key: 1 },
  { value: "every_week", name: "Every week", key: 2 },
  { value: "every_two_weeks", name: "Every 2 weeks", key: 3 },
  { value: "every_month", name: "Every month", key: 4 }
];
