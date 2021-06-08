import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Navbar from "./../../UI/organisms/Navbar";
import Login from "./../Login";
import Home from "./../Home";

export default function Router() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main className="h-full">
        <div className="flex flex-wrap justify-center bg-main w-full h-full border-t border-gray-400 text-center pt-12 px-10 md:px-20 rounded-tl-main">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <br />
        </div>
      </main>
    </BrowserRouter>
  );
}
