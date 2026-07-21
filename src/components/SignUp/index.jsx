import React, { useState } from "react";
import { useNavigate } from "react-router-native";
import useCreateUser from "../../hooks/useCreateUser";
import useSignIn from "../../hooks/useSignIn";
import SignUpForm from "./Form";

const SignUp = () => {
    const [createUser] = useCreateUser();
    const [signIn] = useSignIn();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await createUser({ username, password });
            await signIn({ username, password });

            navigate("/");
        } catch (e) {
            setError(e.message);
        }
    };

    return <SignUpForm onSubmit={onSubmit} error={error} />;
};

export default SignUp;