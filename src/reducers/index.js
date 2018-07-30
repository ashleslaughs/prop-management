import { combineReducers } from 'redux';

import {reducers as form } from 'redux-form';

import auth from './authReducer'

const rootReducer = combineReducers({
  form,
  auth
});

export default rootReducer;