import { Formik } from "formik";
import React from "react";
import EditCompanyForm from "./EditCompanyForm";
import EditCompanySchema from "./EditCompanySchema";

export default function EditCompany({ error, company, saveChanged }) {
	const initialValues = {
		name: company.name,
		description: company.description,
		email: company.email,
		address: company.address,
		rooms: company.rooms,
		services: company.services,
		notVerifiedEmail: company.notVerifiedEmail
	};

	return (
		<Formik
			initialValues={{
				...initialValues,
				error
			}}
			validationSchema={EditCompanySchema}
			onSubmit={values => {
				const { ...profile } = values;
				saveChanged(profile);
			}}
			component={EditCompanyForm}
		/>
	);
}
