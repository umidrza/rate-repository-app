import { View } from 'react-native';
import { format } from 'date-fns';
import styles from './styles';
import Text from '../Text';

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.container}>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating} fontWeight="bold">
                    {review.rating}
                </Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.username} fontWeight="bold">
                    {review.user.username}
                </Text>

                <Text style={styles.date}>
                    {format(new Date(review.createdAt), 'dd MMM yyyy')}
                </Text>

                <Text>{review.text}</Text>
            </View>
        </View>
    );
};

export default ReviewItem;