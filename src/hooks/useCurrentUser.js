import { useQuery } from "@apollo/client/react";
import { GET_CURRENT_USER } from "../graphql/queries";

const useCurrentUser = (includeReviews = false) => {
   const { data, loading, error, refetch } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews,
    },
    fetchPolicy: "cache-and-network",
  });

  return {
    currentUser: data?.me,
    loading,
    error,
    refetch,
  };
};

export default useCurrentUser;