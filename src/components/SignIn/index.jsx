import { useState } from "react";
import { useNavigate } from "react-router-native";
import useSignIn from '../../hooks/useSignIn';
import SignInForm from './Form';

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password });
      navigate("/");
    } catch {
      setError("Invalid username or password");
    }
  };

  return <SignInForm onSubmit={onSubmit} error={error} />;
};

export default SignIn;