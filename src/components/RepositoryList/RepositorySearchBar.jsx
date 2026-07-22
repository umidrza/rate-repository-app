import { TextInput } from 'react-native';
import styles from './styles';

const RepositorySearchBar = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <TextInput
      style={styles.search}
      placeholder="Search repositories"
      value={searchKeyword}
      onChangeText={setSearchKeyword}
    />
  );
};

export default RepositorySearchBar;