import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart/Cart';
import { getCartItemsThunk } from '../thunks/index';

class CartPage extends Component {
  componentDidMount() {
    const { getCartItems, items } = this.props;
    if (!items.length) {
      getCartItems();
    }
  }

  render() {
    console.log('items---', this.props.items);
    const { items, loading, error, etext, totalPrice } = this.props;
    return (
      <>
        {loading && <div>Loading...</div>}
        {error && <div>{etext}</div>}
        {!loading && !error && <Cart items={items} totalPrice={totalPrice} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartItems.items,
  totalPrice: state.cartItems.totalPrice,
  loading: state.cartItems.loading,
  error: state.cartItems.error,
  etext: state.cartItems.etext,
});

const mapDispatchToProps = dispatch => ({
  getCartItems: () => dispatch(getCartItemsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
