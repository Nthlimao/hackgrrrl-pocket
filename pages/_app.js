import { ThemeProvider } from "styled-components";
import theme from "../components/theme";

import "../vendors/typography.css";
import "../vendors/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
