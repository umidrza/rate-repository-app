import { Pressable, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.large,
    borderRadius: theme.borderRadius.small,
    alignItems: "center",
    marginTop: theme.spacing.medium,
  },
});

const FormButton = ({ title, onPress }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text color="white" bold>
      {title}
    </Text>
  </Pressable>
);

export default FormButton;