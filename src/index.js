import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ReactSession from "./tools/ReactSession";

ReactSession.setStoreType("cookie");

// const client = new ApolloClient({
//   uri: "http://192.168.1.71:3100/",
//   cache: new InMemoryCache(),
// });

ReactDOM.render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
    <App />
    {/* </ApolloProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
