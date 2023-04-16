import "../styles/style.css";
import type { AppProps } from "next/app";
import store from "../redux/store";
import { Provider } from "react-redux";
import { StrictMode, useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    let devEnv = process && process.env.NODE_ENV === "development";
    if (!devEnv) {
      window.addEventListener("DOMContentLoaded", function () {
        navigator.serviceWorker.register("../../arc-sw.js").then(
          function (registration) {
            console.log("Trabajador de servicio de arco exitoso con alcance: ", registration.scope);
          },
          function (err) {
            console.log("El registro del trabajador del servicio de Arc falló: ", err);
          }
        );
      });
    }
  }, []);
  
  return (
    <StrictMode>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </StrictMode>
  );
};

export default App;