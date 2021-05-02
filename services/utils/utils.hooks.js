import { useQuery } from "@apollo/react-hooks";
import { UTILS } from "./utils.query";

export const useUtils = () => {
    const getUtils = useQuery(UTILS);

    return {
        getUtils,
    };
};
