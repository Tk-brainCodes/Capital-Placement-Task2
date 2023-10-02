import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SearchProvider } from "./context/search-context.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);
