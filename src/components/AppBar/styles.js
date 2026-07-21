import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.backgroundSecondary,
        paddingBottom: theme.spacing.medium,
    },
    tab: {
        paddingVertical: theme.spacing.medium,
        paddingHorizontal: theme.spacing.large,
    },
});

export default styles;