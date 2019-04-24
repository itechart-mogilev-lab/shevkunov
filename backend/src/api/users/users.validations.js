import Joi from "joi";
export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
export const phoneReg = /^\+375(29|25|44|33)\d{7}$/;
export default {
  signup: {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(passwordReg)
      .required(),
    userName: Joi.string().required()
  }
};
