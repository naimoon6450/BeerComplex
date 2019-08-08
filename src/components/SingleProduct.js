import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postOrder } from '../redux/reducers/order'
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { truncate } from '../../utils';

// for the truncating
const HEIGHT_WRAP = 100;

const styles = makeStyles({
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
  desc: {
    textOverflow: 'ellipses',
    overflow: 'hidden',
    margin: '1em',
    height: '100px',
    wordWrap: 'break-word',
  },
});

class SingleProduct extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     quantity: '',
  //   }
  // }

  // handleChange (event) {
  //   this.setState({quantity: event.target.value});
  // }

  render () {
    const { product, addToCart } = this.props;
    const { supplier, category } = product;
    const descWrapped = truncate(product.description, HEIGHT_WRAP);
    const classes = styles();
    return (
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
        <Card className={classes.root}>
          <CardHeader title={product.name} subheader={category.name} />
          <CardMedia image={product.imageUrl} className={classes.media} />
          <CardContent>
            {/* <li>
              <img src={product.imageUrl} className="product-image" />
            </li> */}
            <Typography variant="body2" className={classes.desc}>
              {descWrapped}
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
                addToCart({orderProducts: [product]});
              }}
            >
              <AddIcon />
            </Fab>
          </CardContent>
        </Card>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (order) => dispatch(postOrder(order)),
  };
};

// proptypes to do typechecking
SingleProduct.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
};

const ConnectedSingleProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);

export default ConnectedSingleProduct;
