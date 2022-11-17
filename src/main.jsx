import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider";
import BlogContextProvider from "./context/BlogContextProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <BlogContextProvider>
        <App />
        </BlogContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
