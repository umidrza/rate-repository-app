import { useState } from 'react';
import { useNavigate } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const getOrderVariables = (order) => {
  switch (order) {
    case "HIGHEST":
      return {
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
      };

    case "LOWEST":
      return {
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      };

    case "LATEST":
    default:
      return {
        orderBy: "CREATED_AT",
        orderDirection: "DESC",
      };
  }
};

const RepositoryList = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState("LATEST");
  const { repositories } = useRepositories(getOrderVariables(order));

  return (
    <RepositoryListContainer
      repositories={repositories}
      onNavigate={navigate}
      order={order}
      onOrderChange={setOrder}
    />
  );
};

export default RepositoryList;