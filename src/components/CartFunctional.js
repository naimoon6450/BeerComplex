import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  FormControl,
  InputLabel,
  NativeSelect,
  Input,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  spacing: {
    padding: theme.spacing(3, 2),
    maxWidth: '300',
  },
  paper: {
    padding: theme.spacing(4),
    margin: '2em',
    // maxWidth: '70/em',
    maxHeight: '20em',
  },
  paperError: {
    // padding: theme.spacing(2),
    margin: '2em',
    maxHeight: 'auto',
    textAlign: 'center',
  },
  img: {
    margin: '1em',
    maxHeight: '300px',
    maxWidth: '300px',
  },
  labelWidth: {
    width: '100%',
    height: '100px',
  },
}));

const CartFunctional = props => {
  const classes = useStyles();
  const { quantity, updateItem, cartItemState } = props;
  const { cart } = props.cart;
  return cart.length ? (
    cart.map(cartItem => {
      const { supplier, category } = cartItem;
      return (
        <Paper key={cartItem.id} className={classes.paper}>
          <Grid container spacing={2}>
            <ButtonBase>
              <img
                className={classes.img}
                alt="complex"
                src={cartItem.imageUrl}
              />
            </ButtonBase>
            <Grid item xs>
              <Grid item sm container direction="column" spacing={2}>
                <Typography variant="h2">{cartItem.name}</Typography>
                <Typography variant="subtitle1" style={{ marginLeft: '5px' }}>
                  {category.name}
                </Typography>
                <Typography variant="subtitle2" style={{ marginLeft: '5px' }}>
                  {supplier.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={2}>
              {/* no state at the moment to hold the value */}
              <FormControl className={classes.labelWidth} variant="outlined">
                <InputLabel shrink htmlFor="cat-label">
                  Quantity
                </InputLabel>
                <NativeSelect
                  // value={state.age}
                  // onChange={handleChange('age')}
                  input={<Input name="quant" id="quant-id" />}
                  onChange={e => console.log(e.target.value)}
                >
                  {[1, 2, 3, 4, 5].map((quant, ind) => {
                    return (
                      <option key={ind} value={quant}>
                        {quant}
                      </option>
                    );
                  })}
                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      );
    })
  ) : (
    <Paper className={classes.paperError}>
      <Typography variant="h1">NO ITEMS IN CART!</Typography>
    </Paper>
  );
};

export default CartFunctional;
