import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const AllProducts = props => {
  return (
    <div>
      <ul>
        {props.products.map(product => {
          return (
            <li>
              <ul>
                <li>Name: {product.name}</li>
                <li>
                  <img src={product.imageUrl} />
                </li>
                <li>Description: {product.description}</li>
                <li>Price: {product.price}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(AllProducts);
