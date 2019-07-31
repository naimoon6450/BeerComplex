import axios from 'axios';

const initialState = {
  loggedUser: {},
};

const SET_LOGGED_USER = 'SET_LOGGED_USER';

const setLoggedUser = user => {
  return {
    type: SET_LOGGED_USER,
    user,
  };
};

// thunk to post new users
export const loginUser = (userObj, history) => {
  return dispatch => {
    axios
      .post('api/auth/login', userObj)
      .then(resp => resp.data)
      .then(loggedUser => {
        dispatch(setLoggedUser(loggedUser));
        history.push({
          pathname: '/home',
          state: { user: loggedUser },
        });
      });
  };
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return { ...state, loggedUser: action.user };
    default:
      return state;
  }
};

export default users;
