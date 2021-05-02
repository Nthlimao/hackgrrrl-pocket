import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
    uri: "https://hackgrrrl-pocket-api.herokuapp.com/graphql",
    onError: ({ graphQLErrors, networkError }) => {
        console.log("graphQLErrors", graphQLErrors);
        console.log("networkError", networkError);
    },
});
