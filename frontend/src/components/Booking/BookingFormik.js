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
	const initialValues = props.order || {
		address: "ul.Ostrovskogo, d.44,kv.44",
		service: "Total",
		roomsCount: {
			standart: "1",
			big: "1",
			toilet: "1"
		},
		reccurent: false,
		date: "2019-04-19",
		startTime: "10:10",
		days: [],
		regularity: "One time",
		duration: 0,
		availableServices,
		availableRegularity,
		email: "vadimshevkunov@mail.ru"
	};
	console.log("IN", initialValues);
	return (
		<div>
			<Formik
				initialValues={initialValues}
				/*initialValues={props.values || {
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
        }}*/
				validationSchema={BookingSchema}
				onSubmit={values => {
					if (props.company) {
						props.saveOrders(values);
						props.showModal();
					} else {
						props.saveOrders(values);
						props.history.push(`/companies?service=${values.service}`);
					}
				}}
				render={formProps => <BookingForm {...formProps} {...props} />}
			/>
		</div>
	);
}
