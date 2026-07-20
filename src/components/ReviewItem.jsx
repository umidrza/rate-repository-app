import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import theme from '../theme';
import Text from './Text';

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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: theme.spacing.large,
        backgroundColor: 'white',
    },

    ratingContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing.large,
    },

    rating: {
        color: theme.colors.primary,
        fontSize: theme.fontSizes.subheading,
    },

    content: {
        flex: 1,
    },

    username: {
        marginBottom: theme.spacing.small,
    },

    date: {
        color: '#586069',
        marginBottom: theme.spacing.small,
    },
});

export default ReviewItem;