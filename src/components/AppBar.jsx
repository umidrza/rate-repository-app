import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundSecondary,
    paddingBottom: theme.spacing.medium,
  },
});


const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" to="/" />
        <AppBarTab title="Sign In" to="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;