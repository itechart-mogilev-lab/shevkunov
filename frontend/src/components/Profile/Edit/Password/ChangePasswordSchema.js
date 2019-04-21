import { string, object, ref } from "yup";

const ChangePasswordSchema = object().shape({
		oldPassword: string().required("Old password is required"),
        newPassword: string()
        .required("New password is required")
		.min(6)
		.max(30)
		.matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, "Password must contains capital letter, digits and 6 and more characters"),
	  confirmNewPassword: string()
		.oneOf([ref("newPassword"), null], "Passwords don't match")
});

export default ChangePasswordSchema;
