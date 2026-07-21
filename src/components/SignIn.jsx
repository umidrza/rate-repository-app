import { useState } from "react";
import { useNavigate } from "react-router-native";
import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import FormikTextInput from './Form/FormikTextInput';
import FormContainer from './Form/FormContainer';
import FormButton from './Form/FormButton';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export const SignInContainer = ({ onSubmit, error }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <FormContainer error={error}>
          <FormikTextInput
            name="username"
            placeholder="Username"
            autoCapitalize="none"
            formikProps={formikProps}
          />

          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
            formikProps={formikProps}
          />

          <FormButton
            title="Sign in"
            onPress={formikProps.handleSubmit}
          />
        </FormContainer>
      )}
    </Formik>
  );
};


const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
      setError("Invalid username or password");
    }
  };

  return <SignInContainer onSubmit={onSubmit} error={error} />;
};

export default SignIn;