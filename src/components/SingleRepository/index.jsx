import { useParams } from 'react-router-native';
import { FlatList, View } from 'react-native';

import useRepository from '../../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import ReviewItem from '../ReviewItem';

const SingleRepository = () => {
  const { id } = useParams();

  const { repository, fetchMore } = useRepository(id, 5);

  if (!repository) return null;

  const reviews = repository.reviews.edges.map(edge => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <RepositoryItem item={repository} showGitHubButton />
      }
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={() => (
        <View style={{ height: 10 }} />
      )}
    />
  );
};

export default SingleRepository;