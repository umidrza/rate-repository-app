import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    padding: theme.spacing.large,
  },
  header: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: theme.borderRadius.medium,
    marginRight: theme.spacing.large,
  },
  info: {
    flex: 1,
  },
  fullName: {
    marginBottom: theme.spacing.small,
  },
  description: {
    marginBottom: theme.spacing.medium,
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
    borderRadius: theme.borderRadius.small,
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: theme.spacing.large,
  },
  statistic: {
    alignItems: 'center',
  },
  githubButton: {
    marginTop: theme.spacing.large,
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
  },
});

export default styles;