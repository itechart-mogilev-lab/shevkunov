import React from "react";
import { Formik } from "formik";
import RegisterSchema from "./RegisterUserSchema";
import RegisterUserForm from "./RegisterUserForm";

export default function RegisterComponentFormik(props) {
	return (
		<Formik
			initialValues={{
				firstname: "",
				surname: "",
				email: "",
				password: "",
				confirmPassword: "",
				phoneNumber: ""
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
