import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import trackitemReducer from './trackitem_reducer';
import ipaddressReducer from './ipaddress_reducer';

export const reducers = combineReducers({
  searchReducer,
  trackitemReducer,
  ipaddressReducer
});
