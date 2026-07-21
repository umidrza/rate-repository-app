import { Formik } from 'formik';
import validationSchema from './validation';
import FormikTextInput from '../Form/FormikTextInput';
import FormContainer from '../Form/FormContainer';
import FormButton from '../Form/FormButton';

const SignInForm = ({ onSubmit, error }) => {
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

export default SignInForm;