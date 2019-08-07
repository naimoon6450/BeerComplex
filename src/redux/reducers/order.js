import axios from 'axios';

// Constants
const ORDER_REQUEST = 'ORDER_REQUEST';
const ORDER_REQUEST_FAILURE = 'ORDER_REQUEST_FAILURE';
const GET_ORDER = 'GET_ORDER';
const GET_ALL_ORDERS = 'GET_ALL_ORDERS';

// Action Creators
const fetchingOrderData = () => ({
    type: ORDER_REQUEST,
});

const fetchingOrderDataError = error => ({
    type: ORDER_REQUEST_FAILURE,
    error: 'Failed to fetch order data',
    payload: error,
});

const getOrder = order => ({
    type: GET_ORDER,
    order,
  });

const getAllOrders = orders => ({
    type: GET_ALL_ORDERS,
    orders,
});

// Thunks
export const postOrder = order => dispatch => {
    axios.post('/api/orders', order)
    .then(res => {
      dispatch(getOrder(res.data));
    })
    .catch(e => console.log(e))
}

export const fetchAllOrders = () => dispatch => {
    dispatch(fetchingOrderData());
    axios
      .get('/api/orders')
      .then(res => res.data)
      .then(orders => dispatch(getAllOrders(orders)))
      .catch(error => dispatch(fetchingOrderDataError(error)));
  };

// Reducers

//   export default orders;