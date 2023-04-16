import * as yup from "yup";

export const RegisterValidationSchema = yup.object().shape({
    fullname: yup.string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required("Full name is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });