import { StyleSheet } from 'react-native';
import theme from '../../theme';

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

    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: theme.spacing.large,
        gap: 20
    },

    buttons: {
        borderRadius: theme.borderRadius.small,
        alignItems: "center",
        paddingVertical: theme.spacing.medium,
        paddingHorizontal: theme.spacing.large
    },

    deleteButton: {
        backgroundColor: theme.colors.error,
    },

    viewButton: {
        backgroundColor: theme.colors.primary,
    },
});

export default styles;