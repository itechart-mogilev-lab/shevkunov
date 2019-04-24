import { string, object, ref } from "yup";

const UserSchema = object().shape({
  firstname: string()
    .required("Firstname is required")
    .min(3)
    .max(20),
  surname: string()
    .required("Surname is required")
    .min(4)
    .max(20),
  email: string().email().required("Email is required"),
  phoneNumber: string()
    .matches(/^\+375(29|25|44|33)\d{7}$/, "Phone must be alike +375441234567")
    .when("email", {
      is: "",
      then: string().required("Enter email or your phone")
    }),
  password: string()
    .required("Enter your password")
    .min(6)
    .max(30)
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, "Password must contains capital letter, digits and 6 and more characters"),
  confirmPassword: string()
    .required("Confirm password is required")
    .oneOf([ref("password"), null], "Passwords don't match")
});

export default UserSchema;
