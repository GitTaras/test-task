import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart/Cart';
import { getCartItemsThunk } from '../thunks/index';
import Message from '../components/Message/Message';
import SkeletonCart from '../components/Skeleton/SkeletonCart';

class CartPage extends Component {
  componentDidMount() {
    const { getCartItems, items } = this.props;
    if (!items.length) {
      getCartItems();
    }
  }

  render() {
    const { items, isLoading, error, etext, totalPrice } = this.props;
    return (
      <>
        {isLoading && <SkeletonCart />}
        {error && <Message text={etext} />}
        {!isLoading && !error && <Cart items={items} totalPrice={totalPrice} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartItems.items,
  totalPrice: state.cartItems.totalPrice,
  isLoading: state.cartItems.isLoading,
  error: state.cartItems.error,
  etext: state.cartItems.etext,
});

const mapDispatchToProps = dispatch => ({
  getCartItems: () => dispatch(getCartItemsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
