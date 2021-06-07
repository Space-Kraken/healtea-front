import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Navbar from "./../../UI/organisms/Navbar";
import Home from "./../Home";

export default function Router() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main className="h-full">
        <div className="bg-white h-full border-t border-gray-400 text-center pt-10 px-20 rounded-tl-main">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
          <br />
        </div>
      </main>
    </BrowserRouter>
  );
}
