import { Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
  },
});

const AppBarTab = ({ title }) => {
  return (
    <Pressable style={styles.tab}>
      <Text color="white" fontSize="subheading" fontWeight="bold">
        {title}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;