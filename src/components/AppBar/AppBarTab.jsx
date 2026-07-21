import { Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../Text';
import styles from './styles';

const AppBarTab = ({ title, to, onPress }) => {
  return (
    <Link style={styles.tab} to={to} onPress={onPress} component={Pressable}>
      <Text color="white" fontSize="subheading" fontWeight="bold">
        {title}
      </Text>
    </Link>
  );
};

export default AppBarTab;