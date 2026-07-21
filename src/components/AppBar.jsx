import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import useSignOut from '../hooks/useSignOut';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
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
  const signOut = useSignOut();
  const { authorizedUser } = useAuthorizedUser();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" to="/" />

        {authorizedUser ? (
          <>
            <AppBarTab
              title="Create a review"
              to="/review"
            />
            <AppBarTab title="Sign out" onPress={signOut} />
          </>
        ) : (
          <AppBarTab title="Sign in" to="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;