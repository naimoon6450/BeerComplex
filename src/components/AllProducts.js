import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../redux/reducers/product';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <ul>
        {products.map(product => {
          const { supplier, category } = product;
          return (
            <li key={product.id}>
              <ul
                onClick={() => {
                  console.log('Product:', product);
                }}
              >
                <li>Name: {product.name}</li>
                <li>
                  <img src={product.imageUrl} className="product-image" />
                </li>
                <li>Category: {category.name}</li>
                <li>Description: {product.description}</li>
                <li>Price: ${product.price}</li>
                <li>Brewery: {supplier.name}</li>
              </ul>
              <button
                type="button"
                onClick={() => {
                  console.log('Added to cart');
                }}
              >
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchAllProducts()),
  };
};

// proptypes to do typechecking
AllProducts.propTypes = {
  products: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProducts);
