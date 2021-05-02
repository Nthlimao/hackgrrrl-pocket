import gql from "graphql-tag";

export const UTILS = gql`
    query {
        genders {
            name
            value
        }
        races {
            name
            value
        }
        sexualOrientations {
            name
            value
        }
        civilStatus {
            name
            value
        }
        schoolings {
            name
            value
        }
        remunerations {
            name
            value
        }
        disabilities {
            name
            value
        }
    }
`;
