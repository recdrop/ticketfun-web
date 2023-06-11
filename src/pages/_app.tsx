import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import { EventCityProvider } from "../hooks/useEventCity";
import { EventTypeProvider } from "../hooks/useEventType";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ticketfun - Seu passaporte para os melhores espetáculos!</title>
      </Head>
      <EventTypeProvider>
        <EventCityProvider>
          <Component {...pageProps} />
        </EventCityProvider>
      </EventTypeProvider>
      <ToastContainer />
    </>
  );
}
