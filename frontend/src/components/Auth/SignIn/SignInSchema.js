import { string, object } from "yup";

const SignInSchema = object().shape({
  email: string()
    .email()
    .required("Enter your email"),
  password: string().required("Enter your password")
});

export default SignInSchema;
