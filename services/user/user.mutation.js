import gql from "graphql-tag";

export const REGISTER = gql`
    mutation createUser($input: RegisterInput!) {
        createUser(RegisterInput: $input) {
            _id
            email
        }
    }
`;
