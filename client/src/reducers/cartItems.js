import ACTION from '../actions/actionTypes';

const initialState = {
  error: false,
  isLoading: false,
  etext: '',
  items: [],
  totalPrice: 0,
};

const getTotalPrice = items => {
  return items.reduce((ac, cur) => ac + cur.quantity * cur.price, 0);
};

export default function cartItems(state = initialState, action) {
  switch (action.type) {
    case ACTION.FCART_ITEMS_LOADING:
      return { ...state, isLoading: true };
    case ACTION.FCART_ITEMS_ERROR:
      return { ...state, isLoading: false, error: true, etext: action.etext };
    case ACTION.FCART_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.items,
        totalPrice: action.totalPrice,
        isLoading: false,
        error: false,
        etext: '',
      };
    case ACTION.UPDATE_CART_ITEM: {
      const items = state.items.map(item =>
        item.id === action.item.id ? { ...item, ...action.item } : item
      );
      return {
        ...state,
        items,
        totalPrice: getTotalPrice(items),
      };
    }
    case ACTION.DELETE_CART_ITEM: {
      const items = state.items.filter(item => item.id !== action.id);
      return {
        ...state,
        items,
        totalPrice: getTotalPrice(items),
      };
    }
    default:
      return state;
  }
}
