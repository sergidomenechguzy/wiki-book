import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Drawer from "../components/Drawer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Drawer>
      <Component {...pageProps} />
    </Drawer>
  );
}

export default MyApp;
