import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

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
});

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }

  return String(count);
};

const Statistic = ({ label, value }) => (
  <View style={styles.statistic}>
    <Text fontWeight="bold">
      {formatCount(value)}
    </Text>
    <Text color="secondary">
      {label}
    </Text>
  </View>
);

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: item.ownerAvatarUrl }}
        />

        <View style={styles.info}>
          <Text style={styles.fullName} fontWeight="bold" fontSize="subheading">
            {item.fullName}
          </Text>

          <Text style={styles.description} color="secondary">
            {item.description}
          </Text>

          <Text style={styles.language}>
            {item.language}
          </Text>
        </View>
      </View>

      <View style={styles.statistics}>
        <Statistic label="Stars" value={item.stargazersCount} />
        <Statistic label="Forks" value={item.forksCount} />
        <Statistic label="Reviews" value={item.reviewCount} />
        <Statistic label="Rating" value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;