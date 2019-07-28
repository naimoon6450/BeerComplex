import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Login, SignUp, AllProducts } from './index';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="main">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/products" component={AllProducts} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
