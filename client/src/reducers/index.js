import { combineReducers } from 'redux';
import cartItems from './cartItems';
//import { reducer as reduxFormReducer } from 'redux-form'
export default combineReducers({
		cartItems,
		//form: reduxFormReducer,
});