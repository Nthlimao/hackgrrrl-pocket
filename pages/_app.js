import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";

import theme from "../components/theme";
import { client } from "../config/graphql";

import "../vendors/typography.css";
import "../vendors/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default MyApp;
