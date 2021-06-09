import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from "react-cookie";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.1.71:3100/",
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
