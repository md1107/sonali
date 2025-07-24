import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SafeHydrate from "./components/SafeHydrate";
if (typeof window === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

if (import.meta.env.DEV) {
  import("tempo-devtools")
    .then(({ TempoDevtools }) => {
      TempoDevtools.init();
    })
    .catch(() => {
      // Ignore tempo devtools errors in development
    });
}

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SafeHydrate>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
    </SafeHydrate>
  </React.StrictMode>,
);
