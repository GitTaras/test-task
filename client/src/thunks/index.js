import getCartItemsReq from "../api/index";
import {getCartItems, getCartItemsError, getCartItemsSuccess} from "../actions/actionCreators";

export function getCartItemsThunk() {
  return function(dispatch) {
    dispatch(getCartItems);
    getCartItemsReq()
    .then((data) => {
      dispatch(getCartItemsSuccess(data.items));
    })
    .catch((error) => {
      dispatch(getCartItemsError(error))
    });
  }
}


