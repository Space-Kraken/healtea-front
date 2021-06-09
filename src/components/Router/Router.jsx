import React, { useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Navbar from "./../UI/organisms/Navbar";
import Login from "./../pages/Login";
import Home from "./../pages/Home";
import { useCookies } from "react-cookie";

export default function Router() {
  const { addToast } = useToasts();
  const [cookies, remove] = useCookies(["user"]);
  const [session, setSession] = useState(
    cookies.user !== "undefined" ? true : false
  );
  const initSession = (state) => {
    setSession(state);
  };

  const deleteSession = () => {
    remove("user");
    remove("license");
    remove("token");
    remove("image");
    // ReactSession.remove("user");
    // ReactSession.remove("license");
    // ReactSession.remove("token");
    // ReactSession.remove("image");
  };

  return (
    <BrowserRouter>
      <header>
        <Navbar state={session} />
      </header>
      {console.log("cookies")}
      {console.log(cookies)}
      <main className="h-full">
        <div className="flex justify-center bg-fresh-god-magic-bd w-full h-full border-t-2 border-gray-400 text-center pt-5 px-4 sm:pt-12 sm:px-10 md:px-20 rounded-tl-main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              {cookies.license !== "Admin" ? <Redirect to="/" /> : <Home />}
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
