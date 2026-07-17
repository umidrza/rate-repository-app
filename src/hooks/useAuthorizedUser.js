import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";

const useAuthorizedUser = () => {
  const { data, loading, error } = useQuery(ME);

  return {
    authorizedUser: data?.me,
    loading,
    error,
  };
};

export default useAuthorizedUser;