import axios from 'axios';

// Constants
const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
const PRODUCT_REQUEST_FAILURE = 'PRODUCT_REQUEST_FAILURE';
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';

// Action Creators
const getAllProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products,
});

const getSingleProduct = product => ({
  type: GET_SINGLE_PRODUCT,
  product,
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

export const setQuantity = quantity => {
  return {
    type: UPDATE_QUANTITY,
    quantity,
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

//create orderProduct?

export const fetchSingleProduct = prodId => dispatch => {
  axios
    .get(`/api/products/${prodId}`)
    .then(res => res.data)
    .then(product => dispatch(getSingleProduct(product)))
    .catch(error => console.error(error));
};

// Reducers
const initialState = {
  products: [],
  singleProduct: {},
  isFetching: false,
  cart: [],
  quantity: 1,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, isFetching: true };
    case GET_ALL_PRODUCTS:
      return { products: action.products, isFetching: false, cart: state.cart };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.product,
      };
    case ADD_PRODUCT_TO_CART:
      return { ...state, cart: [...state.cart, action.product] };
    case UPDATE_QUANTITY:
      return { ...state, quantity: action.quantity };
    default:
      return state;
  }
};

export default products;
