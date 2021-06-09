import React, { useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import ReactSession from "./../../tools/ReactSession";
import Navbar from "./../UI/organisms/Navbar";
import Login from "./../pages/Login";
import Home from "./../pages/Home";

export default function Router() {
  const { addToast } = useToasts();
  const [session, setSession] = useState(
    ReactSession.get("user") !== "" ? true : false
  );
  const initSession = (state) => {
    setSession(state);
  };

  const deleteSession = () => {
    ReactSession.remove("user");
    ReactSession.remove("license");
    ReactSession.remove("token");
    ReactSession.remove("image");
  };

  return (
    <BrowserRouter>
      {console.log(ReactSession.get("user"))}
      <header>
        <Navbar state={session} />
      </header>
      <main className="h-full">
        <div className="flex justify-center bg-fresh-god-magic-bd w-full h-full border-t-2 border-gray-400 text-center pt-5 px-4 sm:pt-12 sm:px-10 md:px-20 rounded-tl-main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              {ReactSession.get("license") !== "Admin" ? (
                <Redirect to="/" />
              ) : (
                <Home />
              )}
            </Route>
            <Route path="/login">
              {session ? (
                <Redirect to="/" />
              ) : (
                <Login initSesion={initSession} />
              )}
            </Route>
            <Route path="/logout">
              {session ? (
                () => {
                  addToast("You have logged out", {
                    appearance: "info",
                    autoDismiss: true,
                  });
                  setSession(false);
                  deleteSession();
                }
              ) : (
                <Redirect from="/logout" to="/" />
              )}
            </Route>
          </Switch>
          <br />
        </div>
      </main>
    </BrowserRouter>
  );
}
