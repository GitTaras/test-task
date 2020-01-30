const initialState = {
  error: false,
  isLoading: false,
  etext: '',
  items: [],
}

export default function cartItems (state = initialState, action) {
	switch (action.type) {
		case 'FCART_ITEMS_LOADING':
				return {...state, isLoading: true};
		case 'FCART_ITEMS_ERROR':
				return {...state, isLoading: false, error: true, etext: action.etext};
		case 'FCART_ITEMS_SUCCESS':
				console.log("action", action);
				return {
          ...state, items: [...action.items],
          isLoading: false, error: false, etext: ''
        };
		case 'UPDATE_CART_ITEM':
      return {
        ...state, items: [...state.items.map(item => 
          (item.id === action.item.id) ? (action.item) : item)],
      };
		case 'DELETE_CART_ITEM':
      return {
        ...state, items: [...state.items.filter(item =>
          item.id !== action.id)],
      };
		default:
				return state;
	}
}