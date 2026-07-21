import { Formik } from "formik";
import validationSchema from "./validation";
import FormContainer from "../Form/FormContainer";
import FormikTextInput from "../Form/FormikTextInput";
import FormButton from "../Form/FormButton";


const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};


const SignUpForm = ({ onSubmit, error }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {(formikProps) => (
      <FormContainer error={error}>
        <FormikTextInput
          name="username"
          placeholder="Username"
          formikProps={formikProps}
        />

        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
          formikProps={formikProps}
        />

        <FormikTextInput
          name="passwordConfirmation"
          placeholder="Password confirmation"
          secureTextEntry
          formikProps={formikProps}
        />

        <FormButton
          title="Sign up"
          onPress={formikProps.handleSubmit}
        />
      </FormContainer>
    )}
  </Formik>
);

export default SignUpForm;