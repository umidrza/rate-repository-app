import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.large,
  },
  errorText: {
    color: theme.colors.error,
    marginBottom: theme.spacing.medium,
  },
});

const FormContainer = ({ children, error }) => (
  <View style={styles.container}>
    {error && <Text style={styles.errorText}>{error}</Text>}
    {children}
  </View>
);

export default FormContainer;