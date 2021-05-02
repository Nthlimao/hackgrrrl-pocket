import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "./login.mutation";

export const useLogin = () => {
    const [submitLogin] = useMutation(LOGIN);

    return {
        submitLogin,
    };
};
