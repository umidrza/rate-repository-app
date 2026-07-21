import { View, ScrollView } from 'react-native';
import useSignOut from '../../hooks/useSignOut';
import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import AppBarTab from './AppBarTab';
import styles from './styles';

const AppBar = () => {
  const signOut = useSignOut();
  const { authorizedUser } = useAuthorizedUser();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" to="/" />

        {authorizedUser ? (
          <>
            <AppBarTab title="Create a review" to="/review" />
            <AppBarTab title="Sign out" onPress={signOut} />
          </>
        ) : (
          <>
            <AppBarTab title="Sign in" to="/signin" />
            <AppBarTab title="Sign up" to="/signup" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;