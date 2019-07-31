import React from 'react';
import PropTypes from 'prop-types';

const Home = props => {
  const { user } = props.history.location.state;
  return user.length ? <div>{`GREETINGS ${user[0].firstName}, you are logged in!!!`}</div> : <div>LOG IN FAILED</div>;
};

// proptypes to do typechecking
Home.propTypes = {
  user: PropTypes.array,
};

export default Home;
