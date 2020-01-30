import { createStore, applyMiddleware, /*compose*/ } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

export default function configureStore() {
  const middleware = [
    thunk,
  ];
	
  const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(...middleware)));
  return store;
}
