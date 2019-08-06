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
          <input onChange={props.updateQuantity} />
        </form>
        <button
          type="button"
          onClick={props.addToCart(props.product, props.quantity)}
        >
          Add to Cart
        </button>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    //products: state.products.products,
    quantity: state.products.quantity,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (e, product, quantity) => {
      e.preventDefault();
      dispatch(addProductToCart(product, quantity));
    },
    updateQuantity: (e, quantity) => {
      e.preventDefault();
      dispatch(setQuantity(quantity));
    },
  };
};

Product.propTypes = {
  //products: PropTypes.array,
  quantity: PropTypes.integer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(product);
