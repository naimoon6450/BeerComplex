import React from 'react';
import { Link } from 'react-router-dom';

// Material UI requirements
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../themes';

// using Material UI's makeStyles to create style objects
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  // will return an object of styles to use in class
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              SHOP CITY
            </Typography>
            {/* Button [0] for test */}
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            {/* Button [1] for test */}
            <Button component={Link} to="/signup" color="inherit">
              Sign Up
            </Button>

            {/* Logout button if there's a signed in user */}
            {/* <Button color="inherit">Logout</Button> */}

            {/* Should have icon displayed if user is logged in */}
            {/* <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default Navbar;
