import Head from "next/head";

import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";

import theme from "../components/theme";
import { client } from "../config/graphql";

import Shortcuts from "../components/Shortcuts";

import "../vendors/typography.css";
import "../vendors/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Pocket | #TeamWatermelon🍉</title>
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <Shortcuts />
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default MyApp;
