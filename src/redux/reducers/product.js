import axios from 'axios';

// Constants
const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
const PRODUCT_REQUEST_FAILURE = 'PRODUCT_REQUEST_FAILURE';
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

// Action Creators
const getAllProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products,
});

const fetchingProductData = () => ({
  type: PRODUCT_REQUEST,
});

const fetchingProductDataError = error => ({
  type: PRODUCT_REQUEST_FAILURE,
  error: 'Failed to fetch product data',
  payload: error,
});

export const addProductToCart = product => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  };
};

// Thunks
export const fetchAllProducts = () => dispatch => {
  dispatch(fetchingProductData());
  axios
    .get('/api/products')
    .then(res => res.data)
    .then(products => dispatch(getAllProducts(products)))
    .catch(error => dispatch(fetchingProductDataError(error)));
};

// Reducers
const initialState = {
  products: [],
  isFetching: false,
  cart: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, isFetching: true };
    case GET_ALL_PRODUCTS:
      return { products: action.products, isFetching: false, cart: state.cart };
    case ADD_PRODUCT_TO_CART:
      return { ...state, cart: [...state.cart, action.product] };
    default:
      return state;
  }
};

export default products;
