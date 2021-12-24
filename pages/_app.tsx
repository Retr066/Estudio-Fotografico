import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootswatch/dist/lux/bootstrap.css";
import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
