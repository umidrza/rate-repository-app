import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: '#586069',
    marginBottom: 8,
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: '#0366d6',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  statistic: {
    alignItems: 'center',
  },
  statisticValue: {
    fontWeight: 'bold',
  },
});

const Statistic = ({ label, value }) => (
  <View style={styles.statistic}>
    <Text style={styles.statisticValue}>{value}</Text>
    <Text>{label}</Text>
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
          <Text style={styles.fullName}>{item.fullName}</Text>

          <Text style={styles.description}>
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