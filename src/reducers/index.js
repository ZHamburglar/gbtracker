import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import trackitemReducer from './trackitem_reducer'

export default combineReducers({
  searchReducer,
  trackitemReducer
});
