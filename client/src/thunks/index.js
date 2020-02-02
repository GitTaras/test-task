import {getCartItemsReq} from "../api/index";
import {getCartItems, getCartItemsError, getCartItemsSuccess} from "../actions/actionCreators";

export function getCartItemsThunk() {
  return function(dispatch) {
    dispatch(getCartItems);
    getCartItemsReq()
    .then((data) => {
      dispatch(getCartItemsSuccess(data.items, data.totalPrice));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getCartItemsError(error.message));
    });
  }
}


