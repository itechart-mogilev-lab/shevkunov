import { Formik } from "formik";
import React from "react";
import EditUserSchema from "./EditUserSchema";
import EditUserForm from "./EditUserForm";

export default function EditUser({ error, user, saveChanged }) {
	const initialValues = {
		firstname: user.firstname,
		surname: user.surname,
		email: user.email,
		phone: user.phone,
		addresses: user.addresses,
		isNotify: user.isNotify,
		notVerifiedEmail: user.notVerifiedEmail
	};

	return (
		<Formik
			initialValues={{
				...initialValues,
				error
			}}
			validationSchema={EditUserSchema}
			onSubmit={values => {
				const { ...profile } = values;
				saveChanged(profile);
			}}
			component={EditUserForm}
		/>
	);
}
