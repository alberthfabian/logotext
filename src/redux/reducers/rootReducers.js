import { combineReducers } from 'redux';
import shop from './ShopReducer';
import like from './buscadorReducer';

const rootReducers = combineReducers({
  shop,
  like
});

export default rootReducers;