import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllProducts, addProductToCart } from '../redux/reducers/product';
<<<<<<< HEAD
import { withStyles } from '@material-ui/core/styles';
import Product from './Product';

=======
import { FrontBanner, SingleProduct } from './index';
import { Grid } from '@material-ui/core';
>>>>>>> 55579b264fa406da0cffe92442ffcd63b17f89ab
//add material iu and make grid for all products
const styles = {};

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    return (
      // Will have banner here
      <div>
        <FrontBanner />
        <Grid container spacing={10} justify="center">
          {products.map(product => {
            const { supplier, category } = product;
            return (
              <SingleProduct
                key={product.id}
                product={product}
                supplier={supplier}
                category={category}
              />
            );
          })}
        </Grid>
      </div>
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
    addToCart: product => dispatch(addProductToCart(product)),
  };
};

// proptypes to do typechecking
// AllProducts.propTypes = {
//   products: PropTypes.array,
// };

const StyledAllProducts = withStyles(styles)(AllProducts);
const ConnectedAllProducts = connect(mapStateToProps, mapDispatchToProps)(StyledAllProducts);

export default ConnectedAllProducts;
