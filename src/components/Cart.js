import React from 'react';
import { connect } from 'react-redux';
import { CartFunctional } from './index';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItem: {
        id: '',
        quantity: 1,
      },
    };
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(evt, selId) {
    this.setState({
      cartItem: {
        id: selId,
        quantity: evt.target.value,
      },
    });
  }

  render() {
    const { cart } = this.props;
    return (
      <CartFunctional
        cart={cart}
        cartItemState={this.state.cartItem}
        updateItem={this.updateItem}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

export default connect(mapStateToProps)(Cart);
