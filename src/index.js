import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import env from "dotenv";

env.config();

const client = new ApolloClient({
  uri: "http://localhost:3100/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
