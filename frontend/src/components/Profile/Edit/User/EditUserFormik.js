import { Formik } from "formik";
import React from "react";
import EditUserSchema from "./EditUserSchema";
import EditUserForm from "./EditUserForm";

export default function EditUser(props) {
	const { error, user, saveChanged } = props;
	const initialValues = {
		firstname: user.firstname,
		surname: user.surname,
		email: user.email,
		phone: user.phone,
		addresses: user.addresses,
		oldPassword: "",
		newPassword: "",
		confirmNewPassword: ""
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
			render={formProps => <EditUserForm {...formProps} {...props} />}
		/>
	);
}
