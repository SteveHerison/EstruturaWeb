import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

import RouteMain from "./RoutesMain/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="h-screen w-screen bg-zinc-800">
        <RouteMain />
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
