import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { storeData } from "./redux";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeData}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
