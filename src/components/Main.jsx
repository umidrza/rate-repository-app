import { StyleSheet, View} from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import AppBar from './AppBar';
import theme from '../theme';
import RepositoryList from './RepositoryList';
import Repository from './SingleRepository';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repository/:id" element={<Repository />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/review" element={<CreateReview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;