import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "../services/httpService";
import { SessionProvider } from "next-auth/react";
import Header from "chat/components/header";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <SWRConfig
        value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
      >
        <Header />
        <Component {...pageProps} />
      </SWRConfig>
    </SessionProvider>
  );
}
