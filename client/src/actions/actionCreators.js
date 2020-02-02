import ACTION from './actionTypes';

export const getCartItems = () => ({
  type: ACTION.FCART_ITEMS_LOADING,
});

export const getCartItemsSuccess = (items, totalPrice) => ({
  type: ACTION.FCART_ITEMS_SUCCESS,
  items,
  totalPrice
});

export const getCartItemsError = (etext) => ({
  type: ACTION.FCART_ITEMS_ERROR,
  etext
});

export const updateCartItem = (item) => ({
  type: ACTION.UPDATE_CART_ITEM,
  item
});

export const deleteCartItem = (id) => ({
  type: ACTION.DELETE_CART_ITEM,
  id
});