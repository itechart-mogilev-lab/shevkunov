import { string, object, ref } from "yup";

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
		}),
		oldPassword: string(),
		newPassword: string()
		.min(6)
		.max(30)
		.matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, "Password must contains capital letter, digits and 6 and more characters"),
	  confirmNewPassword: string()
		.oneOf([ref("newPassword"), null], "Passwords don't match")
});

export default EditUserSchema;
