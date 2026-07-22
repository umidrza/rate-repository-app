import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  search: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.medium,
    margin: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
  },
});

export default styles;