import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  spacing: {
    padding: theme.spacing(3, 2),
    maxWidth: '300px',
  },
}));

const SPVFunctional = props => {
  const classes = useStyles();
  const { product } = props;

  return product ? (
    <Grid container spacing={10} justify='center'>
      <Paper className={classes.spacing}>
        <Typography component='p'>{product.description}</Typography>
      </Paper>
    </Grid>
  ) : (
    <div />
  );
};

export default SPVFunctional;
