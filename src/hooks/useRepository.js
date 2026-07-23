import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id, first) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    variables: { id, first },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const reviews = data?.repository?.reviews;

    const canFetchMore = !loading && reviews?.pageInfo?.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        id,
        first,
        after: reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    repository: data?.repository,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepository;