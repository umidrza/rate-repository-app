import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.large,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e1e4e8',
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.small,
    borderRadius: theme.borderRadius.small,
  },
  errorInput: {
    borderColor: '#d73a4a',
  },
  errorText: {
    color: '#d73a4a',
    marginBottom: theme.spacing.medium,
  },
  button: {
    backgroundColor: '#0366d6',
    padding: theme.spacing.large,
    borderRadius: theme.borderRadius.small,
    alignItems: 'center',
    marginTop: theme.spacing.medium,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const FormikTextInput = ({
  name,
  secureTextEntry = false,
  formikProps,
  ...props
}) => {
  const hasError =
    formikProps.touched[name] && formikProps.errors[name];

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          hasError && styles.errorInput,
        ]}
        value={formikProps.values[name]}
        onChangeText={formikProps.handleChange(name)}
        onBlur={formikProps.handleBlur(name)}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      {hasError && (
        <Text style={styles.errorText}>
          {formikProps.errors[name]}
        </Text>
      )}
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({
        username,
        password,
      });

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <View style={styles.container}>
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

          <Pressable
            style={styles.button}
            onPress={formikProps.handleSubmit}
          >
            <Text color="white" bold>
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;