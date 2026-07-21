import { View, FlatList, Pressable } from 'react-native';
import RepositoryItem from '../SingleRepository/RepositoryItem';
import RepositoryOrderPicker from './RepositoryOrderPicker';
import styles from './styles';

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({
  repositories,
  onNavigate,
  order,
  onOrderChange,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => onNavigate(`/repository/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <RepositoryOrderPicker
          value={order}
          onChange={onOrderChange}
        />
      }
    />
  );
};

export default RepositoryListContainer;