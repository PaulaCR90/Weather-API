import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApiContextProvider } from "./context/ApiContext.jsx";
import { ApiFiveContextProvider } from "./context/ApiFiveContext.jsx";
import { SelectContextProvider } from "./context/SelectContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiContextProvider>
    <ApiFiveContextProvider>
      <SelectContextProvider>
        <App />
      </SelectContextProvider>
    </ApiFiveContextProvider>
  </ApiContextProvider>
);
