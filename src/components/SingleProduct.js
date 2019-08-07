import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardHeader, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchAllProducts, addProductToCart } from '../redux/reducers/product';

const styles = makeStyles(({
  root: {
    maxWidth: '350px',
    margin: '1em',
    boxSizing: 'border-box',
  },
  media: {
    height: '200px',
  },
  spacing: {
    margin: '1em',
  },
}));

class SingleProduct extends React.Component {
  render () {
    const { product, supplier, category } = this.props;
    const classes = styles;
    return (
      <div>
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
          <Card className={classes.root}>
            <CardHeader title={product.name} subheader={category.name} />
            <CardMedia image={product.imageUrl} className={classes.media} />
            <CardContent>
              {/* <li>
              <img src={product.imageUrl} className="product-image" />
            </li> */}
              <Typography variant="body2" className={classes.spacing}>
                {product.description}
              </Typography>
              <Typography variant="subtitle1">Price: ${product.price}</Typography>
              <Typography variant="subtitle1" style={{ marginBottom: '5px' }}>
                Brewery: {supplier.name}
              </Typography>
  
              <Fab
                size="small"
                color="secondary"
                aria-label="add"
                onClick={() => {
                  addProductToCart(product);
                  console.log('Added to cart'); //add product to cart
                }}
              >
                <AddIcon />
              </Fab>
            </CardContent>
          </Card>
        </Link>
      </div>
    );
  }
};

// proptypes to do typechecking
SingleProduct.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
  addToCart: PropTypes.func,
};

const StyledSingleProduct = withStyles(styles)(SingleProduct);
const ConnectedSingleProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledSingleProduct);

export default withRouter(ConnectedSingleProduct);
