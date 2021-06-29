/*
TODO Cambiar system path
*/

import React, { useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Navbar from "./../UI/organisms/Navbar";
import Login from "./../pages/Login";
import Home from "./../pages/Home";
import { System } from "./../pages/System";
import { Dashboard } from "./../pages/Admin";
import { useCookies } from "react-cookie";

export default function Router() {
  const { addToast } = useToasts();
  const [cookies, remove, setCookie] = useCookies(["user", "license"]);
  const [session, setSession] = useState(cookies.user ? true : false);
  const initSession = (state) => {
    setSession(state);
  };

  const deleteSession = () => {
    setCookie("user", undefined, { path: "/" });
    remove("license");
    remove("token");
    remove("image");
  };

  return (
    <BrowserRouter>
      <header>
        <Navbar state={session} />
      </header>
      <main className="flex justify-center bg-fresh-god-magic-bd w-full h-full border-t-2 border-b-0 border-gray-400 text-center pt-5 px-4 sm:pt-12 sm:px-10 md:px-20 rounded-tl-main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            {session ? (
              <Redirect to={cookies.license === "Admin" ? "/Summary" : "/"} />
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
          {cookies.license === "Admin" ? (
            <>
              <Route path="/dashboard">
                <Dashboard.Main />
              </Route>
              <Route path="/Summary">
                <Dashboard.Summary />
              </Route>
              <Route path="/Medical-records">
                <Dashboard.MedicalRecords />
              </Route>
              <Route path="/User/:id">
                <Dashboard.User />
              </Route>
              <Route path="/Appointments/:id">
                <System.Appointment />
              </Route>
              <Route path="/Appointments">
                <System.Appointments />
              </Route>
              <Route path="/Recipes">
                <System.Recipes />
              </Route>
              <Route path="/Recipes/:id">
                <System.Recipe />
              </Route>
              <Route path="/Surveys">
                <System.Surveys />
              </Route>
              <Route path="/Surveys/:id">
                <System.Survey />
              </Route>
              <Route path="/Tests">
                <System.Tests />
              </Route>
              <Route path="/Tests/:id">
                <System.Test />
              </Route>
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
        <br />
      </main>
    </BrowserRouter>
  );
}
