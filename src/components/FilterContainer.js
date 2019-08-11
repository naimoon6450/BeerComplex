import React from 'react';
import {
  NativeSelect,
  FormControl,
  InputLabel,
  Input,
  Grid,
} from '@material-ui/core';
import { filterHelper } from '../../utils';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  filterCont: {
    margin: '1em',
    maxWidth: '94em',
  },
});

const FilterContainer = props => {
  const { products } = props;
  const classes = useStyles();
  return (
    <Grid container justify="flex-end" className={classes.filterCont}>
      <FormControl>
        <InputLabel shrink htmlFor="cat-label">
          Category
        </InputLabel>
        <NativeSelect
          // value={state.age}
          // onChange={handleChange('age')}
          input={<Input name="filter" id="filter-category" />}
        >
          <option value="">All</option>
          {products.length && filterHelper(products)}
        </NativeSelect>
      </FormControl>
    </Grid>
  );
};

export default FilterContainer;
