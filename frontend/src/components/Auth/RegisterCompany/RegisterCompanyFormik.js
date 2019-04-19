import React from "react";
import { Formik } from "formik";
import RegisterCompanySchema from "./RegisterCompanySchema";
import RegisterCompanyForm from "./RegisterCompanyForm";

export default function RegisterComponentFormik(props) {
	return (
		<Formik
			initialValues={{
				name: "",
				description: "",
				address: {
					country: "",
					city: "",
					other: ""
				},
				email: "",
				rooms: {
					toilet: {
						price: "",
						time: ""
					},
					standart: {
						price: "",
						time: ""
					},
					big: {
						price: "",
						time: ""
					}
				},
				services: [
					{
						name: "",
						coefficient: ""
					}
				],
				workPlan: [
					{
						day: "",
						workHours: {
							start: "",
							end: ""
						},
						lunchHours: {
							start: "",
							end: ""
						}
					}
				],
				price: "",
				password: "",
				confirmPassword: "",
				phoneNumber: ""
			}}
			validationSchema={RegisterCompanySchema}
			onSubmit={values => {
				const { confirmPassword, ...company } = values;
				props.registerCompany(company, props.history);
			}}
			render={formProps => <RegisterCompanyForm {...formProps} {...props} />}
		/>
	);
}
