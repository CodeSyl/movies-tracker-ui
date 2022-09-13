import type { AppProps } from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, DarkThemeMove } from "baseui";
import { styletron } from "../styletron";
import Layout from "../components/Layout";

import "swiper/css";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={DarkThemeMove}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
