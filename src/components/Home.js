import React from 'react';
import PropTypes from 'prop-types';

const Home = props => {
  const { state } = props.history.location;
  let user;
  state && (user = state.user);

  return state && user.length ? (
    <div>{`GREETINGS ${user[0].firstName}, you are logged in!!!`}</div>
  ) : (
    <div>Can't access this page if you're not logged in</div>
  );
};

// proptypes to do typechecking
Home.propTypes = {
  user: PropTypes.array,
};

export default Home;
