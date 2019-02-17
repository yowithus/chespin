import { combineReducers } from 'redux';
import QuoteReducer from './quote';
import ColorReducer from './color';

const rootReducer = combineReducers({
  quote: QuoteReducer,
  color: ColorReducer,
});

export default rootReducer;
