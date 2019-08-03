import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postLogout } from '../redux/reducers/user';

// Material UI requirements
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../themes';

// const styles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   },
// });

class Navbar extends React.Component {
  render () {
    // const classes = styles;
    const { loggedInUser, postLogout, loggedIn } = this.props;
    return (
      <div> {/*<div className={classes.root}></div>*/}
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" color="inherit"> {/*className={classes.title}>*/}
                SHOP CITY
              </Typography>
              {loggedIn ?
              <div>
              <Button color="inherit" onClick={() => postLogout(loggedInUser)}>Logout</Button>
              <IconButton
                edge="end"
                aria-label="Account of current user"
                aria-haspopup="true"
                color="inherit"
              >
              <AccountCircle />
              </IconButton>
              </div> :
              <div>
              <Button component={Link} to="/login" color="inherit">Login</Button>
              <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
              </div>}
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser,
  loggedIn: state.users.loggedIn,
})

const mapDispatchToProps = dispatch => ({
  postLogout: (user) => {
    dispatch(postLogout(user));
}
})

// const StyledNavbar = withStyles(styles)(Navbar);
const ConnectedNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default ConnectedNavbar;
