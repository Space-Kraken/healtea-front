import React, { useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import ReactSession from "./../../../tools/ReactSession";
import Navbar from "./../../UI/organisms/Navbar";
import Login from "./../Login";
import Home from "./../Home";

export default function Router() {
  const { addToast } = useToasts();
  const [session, setSession] = useState(
    ReactSession.get("user") !== undefined ? true : false
  );
  const initSession = (state) => {
    setSession(state);
  };

  const deleteSession = () => {
    ReactSession.remove("user");
  };

  return (
    <BrowserRouter>
      <header>
        <Navbar state={session} />
      </header>
      <main className="h-full">
        <div className="flex flex-wrap justify-center bg-main w-full h-full border-t border-gray-400 text-center pt-5 px-4 sm:pt-12 sm:px-10 md:px-20 rounded-tl-main">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/login">
              {session ? (
                <Redirect to="home" />
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
