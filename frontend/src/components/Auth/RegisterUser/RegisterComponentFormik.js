import React from "react";
import { Formik } from "formik";
import RegisterSchema from "../RegisterSchema";
import RegisterUserForm from "./RegisterUserForm";
import PropTypes from "prop-types";

export default function RegisterComponentFormik(props) {
	return (
		<Formik
			initialValues={{
				firstname: "",
				surname: "",
				email: "",
				password: "",
				confirmPassword: "",
				phonenumber: ""
			}}
			validationSchema={RegisterSchema}
			onSubmit={values => {
				const { confirmPassword, ...user } = values;
				console.log(user);
				props.registerUser(user, props.history);
			}}
			component={RegisterUserForm}
		/>
	);
}
