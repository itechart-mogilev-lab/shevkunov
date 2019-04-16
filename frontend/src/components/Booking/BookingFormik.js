import React from "react";
import { Formik } from "formik";
import BookingSchema from "./BookingSchema";
import BookingForm from "./BookingForm";
import { selectService, selectRegularity } from "../../helpers/enum";

export default function BookingFormik(props) {
  const availableServices = props.company
    ? props.company.services
    : selectService;
  const availableRegularity = selectRegularity;
  return (
    <Formik
      initialValues={{
        address: "",
        service: "",
        roomsCount: {
          standart: 0,
          big: 0,
          toilet: 0
        },
        reccurent: false,
        date: "",
        startTime: "",
        days: [],
        regularity: "",
        duration: 0,
        availableServices,
        availableRegularity,
        email: ""
      }}
      validationSchema={BookingSchema}
      onSubmit={values => {
        if (props.company) props.history.push("/confForm");
        else {
          props.saveOrders(values);
          props.history.push(`/companies?service=${values.service}`);
        }
      }}
      render={formProps => <BookingForm {...formProps} {...props} />}
    />
  );
}
