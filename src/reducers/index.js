import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import trackitemReducer from './trackitem_reducer'

export const reducers = combineReducers({
  searchReducer,
  trackitemReducer
});
