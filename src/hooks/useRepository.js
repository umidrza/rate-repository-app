import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id, first) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id, first },
    fetchPolicy: 'cache-and-network',
  });

  return {
    repository: data
      ? {
        ...data.repository,
        reviews: data.repository.reviews.edges.map(edge => edge.node),
      }
      : undefined,
    loading,
    error,
  };
};

export default useRepository;