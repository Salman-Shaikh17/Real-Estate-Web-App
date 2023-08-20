import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-z5nhf6gnf6ixr0hh.us.auth0.com"
     clientId="D5kliy9nVjSEA3UxNmoT30y67rntgUc8"
     authorizationParams={{
      redirect_uri: "https://real-estate-web-app-mocha.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
