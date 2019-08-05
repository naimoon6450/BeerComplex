import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Navbar, Login, SignUp, AllProducts } from './index';
import { fetchAuthStatus } from '../redux/reducers/user';
import store from '../redux/store'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.getAuthStatus = this.getAuthStatus.bind(this);
  }

  getAuthStatus () {
    store.dispatch(fetchAuthStatus());
  }

  componentDidMount () {
    // getAuthStatus hits /api/auth and puts on the store
    this.getAuthStatus();
    console.log('main mounting');
  }
  componentDidUpdate() {
    // getAuthStatus hits /api/auth and puts on the store
    this.getAuthStatus();
    console.log('main updating');
  }
  render() {
    console.log('main rendering');
    return (
      <div>
        <Navbar />
        <div id="main">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/products" component={AllProducts} />
            <Redirect from="/home" to="/products" />
            <Redirect from="/" to="/products" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
