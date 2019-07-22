import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import Main from "./components/Main";

// get the app from the dom
const app = document.getElementById("app");
// render on app usign ReactDom
ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  app,
  () => {
    console.log("DOM Rendered");
  }
);
