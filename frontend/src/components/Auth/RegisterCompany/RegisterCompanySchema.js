import { string, object, ref, number, array } from "yup";

const CompanySchema = object().shape({
  name: string()
    .required("Name is required")
    .min(4)
    .max(50),
  description: string()
    .required("Description is required")
    .min(50)
    .max(500),
  email: string("Email is required")
    .required()
    .email(),
  address: object().shape({
    country: string().required("Country is required"),
    city: string().required("City is required"),
    other: string().required("Other is required")
  }),
  password: string()
    .required("Password is required")
    .min(6)
    .max(30)
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
      "Password must contains capital letter, digits and 6 and more characters"
    ),
  confirmPassword: string()
    .required("Confirm password is required")
    .oneOf([ref("password"), null], "Passwords don't match"),
  rooms: object().shape({
    standart: object().shape({
      price: number()
        .required()
        .min(0),
      time: number()
        .required()
        .min(0)
    }),
    big: object().shape({
      price: number()
        .required()
        .min(0),
      time: number()
        .required()
        .min(0)
    }),
    toilet: object().shape({
      price: number()
        .required()
        .min(0),
      time: number()
        .required()
        .min(0)
    })
  }),
  services: array()
    .of(
      object().shape({
        name: string().required(),
        coefficient: number().required()
      })
    )
    .min(1)
    .required()
});

export default CompanySchema;
