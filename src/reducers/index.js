import { combineReducers } from 'redux';
import promoCodeReducer from './promoCodeReducer';
import searchReducer from './search_reducer';

export default combineReducers({
  promoCode: promoCodeReducer,
  searchReducer
});
