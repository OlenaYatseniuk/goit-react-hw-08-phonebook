import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/slice.auth';
import contactsReducer from './contacts/slice.contacts';
import filterReducer from './filter/reducer.filter';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});
export default rootReducer;
