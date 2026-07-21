import { useNavigate } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const navigate = useNavigate();
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} onNavigate={navigate} />;
};

export default RepositoryList;