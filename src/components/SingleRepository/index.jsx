import { useParams } from 'react-router-native';
import { FlatList, View } from 'react-native';

import useRepository from '../../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import ReviewItem from '../ReviewItem';
import Text from '../Text';

const SingleRepository = () => {
  const { id } = useParams();

  const { repository, loading, error } = useRepository(id, 10);

  if (loading) return null;

  if (error) {
    return <Text>Error loading repository.</Text>;
  }

  return (
    <FlatList
      data={repository.reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <RepositoryItem item={repository} showGitHubButton />
      }
      ItemSeparatorComponent={() => (
        <View style={{ height: 10 }} />
      )}
    />
  );
};

export default SingleRepository;