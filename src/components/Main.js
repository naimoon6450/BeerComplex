import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Login, SignUp, AllProducts, Home, SingleProductView } from './index';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../themes';

import Particles from 'react-particles-js';
import { partOptions } from '../themes';

class Main extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Particles className='particles' params={partOptions} />
          <div id='main'>
            <Switch>
              <Route exact path='/' render={() => <AllProducts />} />
              <Route path='/login' render={history => <Login history={history} />} />
              <Route path='/signup' component={SignUp} />
              <Route path='/home' render={history => <Home history={history} />} />
              <Route path='/products/:id' component={SingleProductView} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;
