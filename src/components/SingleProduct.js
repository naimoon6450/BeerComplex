import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardHeader, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

const SingleProduct = props => {
  const { product, supplier, category } = props;
  const classes = useStyles();
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
            <Typography variant='body2' className={classes.spacing}>
              {product.description}
            </Typography>
            <Typography variant='subtitle1'>Price: ${product.price}</Typography>
            <Typography variant='subtitle1' style={{ marginBottom: '5px' }}>
              Brewery: {supplier.name}
            </Typography>

            <Fab
              size='small'
              color='secondary'
              aria-label='add'
              onClick={() => {
                this.props.addToCart(product);
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
};

export default SingleProduct;
