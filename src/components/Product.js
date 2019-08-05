import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProductToCart } from '../redux/reducers/product';

const product = props => {
  return (
    <div>
      Details:
      <ul>
        <li>{props.product.name}</li>
        <li>
          <img src={product.imageUrl} />
        </li>
        <li>{props.product.description}</li>
        <li>{props.product.price}</li>
        <form>
          <span />
          {/*add quantity input  */}
        </form>
        <button type="button" onClick={props.addToCart(props.product)}>
          Add to Cart
        </button>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    quantity: 1,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addProductToCart(product)),
  };
};

Product.propTypes = {
  products: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(product);
