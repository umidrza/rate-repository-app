import { View, Image, Pressable, Linking } from 'react-native';
import Text from '../Text';
import Statistic from './Statistic';
import styles from './styles';

const RepositoryItem = ({ item, showGitHubButton = false }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
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

      {showGitHubButton && (
        <Pressable
          onPress={() => Linking.openURL(item.url)}
          style={styles.githubButton}
        >
          <Text fontWeight="bold" color="white">
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;