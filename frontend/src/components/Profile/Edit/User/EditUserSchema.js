import { string, object } from "yup";

const EditUserSchema = object().shape({
	firstname: string()
		.required("Firstname is required")
		.min(3)
		.max(20),
	surname: string()
		.required("Surname is required")
		.min(4)
		.max(20),
	email: string().email(),
	phoneNumber: string()
		.matches(/^\+375(29|25|44|33)\d{7}$/)
		.when("email", {
			is: "",
			then: string().required("Enter email or your phone")
		})
});

export default EditUserSchema;
