import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../redux/reducers/product';
import store from '../redux/store';
import { SPVFunctional } from './index';

class SingleProductView extends Component {
  componentDidMount() {
    const prodId = this.props.match.params.id;
    const singleProdThunk = fetchSingleProduct(prodId);
    store.dispatch(singleProdThunk);
  }
  render() {
    const { singleProduct } = this.props;
    return singleProduct ? <SPVFunctional product={singleProduct} /> : <div />;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    singleProduct: state.products.singleProduct,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addProductToCart(product)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductView);
