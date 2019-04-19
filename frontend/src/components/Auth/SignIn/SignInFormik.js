import React from "react";
import { Formik } from "formik";
import SignInSchema from "./SignInSchema";
import SignInForm from "./SignInForm";
import AuthPage from "../AuthComponent";

export default function SignInComponentFormik(props) {
	return (
		<AuthPage
			title="Sign in"
			titleDown="Not yet registred?"
			link="/register"
			nameAction="Register"
		>
			<Formik
				initialValues={{
					email: "",
					password: ""
				}}
				validationSchema={SignInSchema}
				onSubmit={values => {
					const user = values;
					props.loginUser(user, props.history);
				}}
				render={formProps => <SignInForm {...formProps} {...props} />}
			/>
		</AuthPage>
	);
}
