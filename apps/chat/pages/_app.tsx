import "../styles/globals.css";
import { SWRConfig } from "swr";
import axios from "../services/httpService";

import { SessionProvider } from "next-auth/react";
import "./styles.css";

import type { AppProps } from "next/app";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <SWRConfig
        value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </SessionProvider>
  );
}
