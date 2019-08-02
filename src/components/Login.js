import React from 'react';
import PropTypes from 'prop-types';
import { loginUser } from '../redux/reducers/user';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Home } from './index';

import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import theme from '../themes';

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: theme.palette.common.white,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = props => {
  const { handleSubmit } = props;
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <MuiThemeProvider theme={theme}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Log In
            </Button>
          </MuiThemeProvider>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

// proptypes to do typechecking
Login.propTypes = {
  handleSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: evt => {
      evt.preventDefault();
      console.log('button clicked');
      const userDetails = {
        email: evt.target.email.value,
        password: evt.target.password.value,
      };
      dispatch(loginUser(userDetails, ownProps.history.history));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
