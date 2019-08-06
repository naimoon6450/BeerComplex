import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { postLogout } from '../redux/reducers/user';

// Material UI requirements
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocalDrink from '@material-ui/icons/LocalDrink';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import theme from '../themes';

// using Material UI's makeStyles to create style objects
const styles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

class Navbar extends React.Component {
  render() {
    const classes = styles;
    const { logout, loggedIn } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Link to="/">
              <LocalDrink color="primary" style={{ marginRight: '15px' }} />
            </Link>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.title}
              to="/"
              component={Link}
              style={{ textDecoration: 'none' }}
            >
              BEEROTOPIA
            </Typography>
            <Button component={Link} to="/" color="inherit">SHOP CITY</Button>
                {loggedIn ?
                <div>
                <Button color="inherit" onClick={() => logout()}>Logout</Button>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser,
  loggedIn: state.users.loggedIn,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => {
    dispatch(postLogout(ownProps.history));
}
})

const StyledNavbar = withStyles(styles)(Navbar);
const ConnectedNavbar = connect(mapStateToProps, mapDispatchToProps)(StyledNavbar);
export default withRouter(ConnectedNavbar);
