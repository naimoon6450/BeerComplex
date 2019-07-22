import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar, Login, SignUp } from "./index";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div id="main">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
