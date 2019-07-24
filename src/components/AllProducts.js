import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const AllProducts = props => {
  return (
    <div style={}>
      <ul>
        {props.products.map(product => {
          return (
            <li>
              <ul onClick={()=>{console.log('Product:', product)}}>
                <li>Name: {product.name}</li>
                <li>
                  <img src={product.imageUrl} />
                </li>
                <li>Description: {product.description}</li>
                <li>Price: {product.price}</li>
              </ul>
              <button onClick={()=>{console.log('Added to cart')}}>Add to Cart</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(AllProducts);
