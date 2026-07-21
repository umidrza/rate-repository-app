import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.small,
    borderRadius: theme.borderRadius.small,
  },
  errorInput: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error,
    marginBottom: theme.spacing.medium,
  }
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
export default FormikTextInput;