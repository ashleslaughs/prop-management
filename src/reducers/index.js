import { combineReducers } from 'redux';

import {reducers as form } from 'redux-form';
import auth from './authReducer';
import newsletters from './newsletterReducer';

const rootReducer = combineReducers({
  form,
  auth,
  newsletters
});

export default rootReducer;