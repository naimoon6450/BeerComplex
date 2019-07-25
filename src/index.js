import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

// get the app from the DOM
const app = document.getElementById('app');
// render on app using ReactDOM
ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  app,
  () => {
    console.log('DOM Rendered');
  }
);
