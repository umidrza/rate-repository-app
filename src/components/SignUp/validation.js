import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(5)
    .max(30),

  password: Yup.string()
    .required("Password is required")
    .min(5)
    .max(50),

  passwordConfirmation: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default validationSchema;