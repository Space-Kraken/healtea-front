/*
TODO Cambiar system path
*/

import React, { useState } from "react";
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect,
  useParams,
} from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Navbar from "./../UI/organisms/Navbar";
import Login from "./../pages/Login";
import Home from "./../pages/Home";
import { System } from "./../pages/System";

import { Medic } from "../pages/Medic";
import { User } from "./../pages/User";

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
    setCookie("license", undefined, { path: "/" });
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
              <Redirect
                to={
                  cookies.license === "Admin"
                    ? "/Dashboard-Summary"
                    : cookies.license === "Medic"
                    ? "/Patients"
                    : "/"
                }
              />
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
          <Route path="/Dashboard">
            {cookies.license === "Admin" ? (
              <Dashboard.Main />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          {/* Completed */}
          <Route path="/Dashboard-Summary">
            {cookies.license === "Admin" ? (
              <Dashboard.Summary />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          {/* Completed */}
          <Route path="/Dashboard-Medical-records">
            {cookies.license === "Admin" ? (
              <Dashboard.MedicalRecords />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          {/* Completed */}
          <Route path="/Dashboard-Users">
            {cookies.license === "Admin" ? (
              <Dashboard.Users />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          {/* Completed */}
          <Route path="/Dashboard-User/:id">
            {cookies.license === "Admin" ? (
              <Dashboard.User />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Dashboard-Appointments/:filter">
            {cookies.license === "Admin" ? (
              <System.Appointments />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Dashboard-Appointment/:user">
            {cookies.license === "Admin" ? (
              <System.Appointment />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Dashboard-Recipes/:filter">
            {cookies.license === "Admin" ? (
              <System.Recipes />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Dashboard-Recipe/:user">
            {cookies.license === "Admin" ? (
              <System.Recipe />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Dashboard-Surveys/:filter">
            {cookies.license === "Admin" ? (
              <System.Surveys />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Dashboard-Surveys/:id">
            {cookies.license === "Admin" ? (
              <System.Survey />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Dashboard-Tests/:filter">
            {cookies.license === "Admin" ? (
              <System.Tests />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Dashboard-Tests/:id">
            {cookies.license === "Admin" ? (
              <System.Test />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Patients">
            {cookies.license === "Medic" ? (
              <Medic.Patients />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Appointments/:id">
            {cookies.license === "Medic" ? (
              <Medic.Appointments />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Tests/:id">
            {cookies.license === "Medic" ? (
              <Medic.Tests />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/Surveys/:id">
            {cookies.license === "Medic" ? (
              <Medic.Surveys />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/SurveysDetails">
            {cookies.license === "Medic" ? (
              <Medic.Surveys />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
        <br />
      </main>
    </BrowserRouter>
  );
}
