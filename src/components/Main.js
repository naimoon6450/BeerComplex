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
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            {/* temp fix: rendering removes 'Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`. */}
            <Route path="/products" render={() => <AllProducts />} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
