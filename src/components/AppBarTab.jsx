import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
  },
});

const AppBarTab = ({ title, to }) => {
  return (
    <Link style={styles.tab} to={to} component={Pressable}>
      <Text color="white" fontSize="subheading" fontWeight="bold">
        {title}
      </Text>
    </Link>
  );
};

export default AppBarTab;