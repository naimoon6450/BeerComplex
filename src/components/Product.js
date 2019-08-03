import React from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../redux/reducers/product';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

class Product extends React.Component {
  render () {
    return (<div />);
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addProductToCart(product)),
  };
};

const StyledProduct = withStyles(styles)(Product);
const ConnectedProduct = connect(mapStateToProps, mapDispatchToProps)(StyledProduct);

export default ConnectedProduct;
