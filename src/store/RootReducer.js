import { combineReducers } from 'redux';
import { FormReducer } from '../FormReducer';

export const rootReducer = combineReducers({
  appFORM: FormReducer,
});
