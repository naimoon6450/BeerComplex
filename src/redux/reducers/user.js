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
  console.log('outside dispatch');
  return dispatch => {
    console.log('in dispatch');
    return axios
      .post('/api/auth/login', userObj)
      .then(resp => {
        console.log('within first .then');
        resp.data;
      })
      .then(loggedUser => {
        console.log('working thunk', loggedUser);
        dispatch(setLoggedUser(loggedUser));
        history.push({
          pathname: '/home',
          state: { user: loggedUser },
        });
      });
  };
};

const users = (state = initialState, action) => {
  console.log('rev state', state);
  switch (action.type) {
    case SET_LOGGED_USER:
      const next = { ...state, loggedUser: action.user };
      console.log('next state', next);
      return next;
    default:
      return state;
  }
};

export default users;
