import axios from 'axios';

// Constants
const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
const CLEAR_LOGGED_IN_USER = 'CLEAR_LOGGED_IN_USER';

// Action Creators
const setLoggedInUser = user => ({
  type: SET_LOGGED_IN_USER,
  user,
})

const clearLoggedInUser = () => ({
  type: CLEAR_LOGGED_IN_USER,
})

// Thunks
export const postLogin = user => dispatch => {
  axios
  .post('api/auth/login', user)
  .then(res => dispatch(setLoggedInUser(res.data)))
  .catch(e => console.error(e));
}

export const postSignup = user => dispatch => {
  axios.post('/api/auth/signup', user)
  .then(res => dispatch(setLoggedInUser(res.data)))
  .catch(e => console.log(e))
}

export const postLogout = user => dispatch => {
  axios.post('/api/auth/logout', user)
  .then(() => dispatch(clearLoggedInUser()))
  .catch(e => console.log(e))
}

// Reducers
const initialState = {
  loggedInUser: {},
  loggedIn: false,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.user, loggedIn: true };
    case CLEAR_LOGGED_IN_USER:
      return { ...state, loggedInUser: null, loggedIn: false};
    default:
      return state;
  }
};

export default users;
