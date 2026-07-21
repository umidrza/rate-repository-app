import { View, FlatList, Pressable } from 'react-native';
import RepositoryItem from '../SingleRepository/RepositoryItem';
import styles from './styles';

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onNavigate }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Pressable
        onPress={() => onNavigate(`/repository/${item.id}`)}
      >
        <RepositoryItem item={item} />
      </Pressable>}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryListContainer;