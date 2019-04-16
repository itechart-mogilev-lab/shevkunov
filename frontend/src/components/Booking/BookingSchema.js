import { string, object, array, bool, number } from "yup";

const BookingSchema = object().shape({
  address: string()
    .required("Address is required")
    .min(10),
  service: string().required("Service is required"),
  roomsCount: object().shape({
    standart: number()
      .required("Number of standart rooms is required")
      .min(1),
    big: number()
      .required("Number of big rooms is required")
      .min(1),
    toilet: number()
      .required("Number of toilets is required")
      .min(1)
  }),
  reccurent: bool().required(),
  date: string().required("Day of th order is required"),
  startTime: string().required("Time of the start is requred"),
  //   days: array(string()).required("Days is required"),
  regularity: string().required("Regularity is required"),
  duration: number().when("reccurent", {
    is: true,
    then: number()
      .required("Duration for reccurent order is required")
      .min(1)
      .max(6)
  }),
  email: string().email()
});

export default BookingSchema;
