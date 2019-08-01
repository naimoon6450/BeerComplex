import connect from 'react-redux';

const product = props => {
  return (
    <div>
      <ul>
        <li />
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addProductToCart(product)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(product);
