import { View, ScrollView } from 'react-native';
import useSignOut from '../../hooks/useSignOut';
import useCurrentUser from '../../hooks/useCurrentUser';
import AppBarTab from './AppBarTab';
import styles from './styles';

const AppBar = () => {
  const signOut = useSignOut();
  const { currentUser } = useCurrentUser();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" to="/" />

        {currentUser ? (
          <>
            <AppBarTab title="Create a review" to="/review" />
            <AppBarTab title="My reviews" to="/my-reviews" />
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