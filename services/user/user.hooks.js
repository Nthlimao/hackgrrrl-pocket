import { useMutation } from "@apollo/react-hooks";
import { REGISTER } from "./user.mutation";

export const useUser = () => {
    const [submitRegister] = useMutation(REGISTER);

    return {
        submitRegister,
    };
};
