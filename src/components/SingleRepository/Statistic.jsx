import { View } from 'react-native';
import Text from '../Text';
import styles from './styles';

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }

  return String(count);
};

const Statistic = ({ label, value }) => (
  <View style={styles.statistic}>
    <Text fontWeight="bold">
      {formatCount(value)}
    </Text>
    <Text color="secondary">
      {label}
    </Text>
  </View>
);

export default Statistic;