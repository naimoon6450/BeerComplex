import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Login, SignUp, AllProducts, Home } from './index';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="main">
          <Switch>
            <Route exact path="/" render={() => <AllProducts />} />
            <Route
              path="/login"
              render={history => <Login history={history} />}
            />
            <Route path="/signup" component={SignUp} />
            {/* temp fix: rendering removes 'Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`. */}
            <Route
              path="/home"
              render={history => <Home history={history} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
