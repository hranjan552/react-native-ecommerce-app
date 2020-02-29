import counterReducer from './counterReducer';
import loginReducer from './loginReducer';

import { combineReducers } from 'redux';

export const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loginReducer
});
