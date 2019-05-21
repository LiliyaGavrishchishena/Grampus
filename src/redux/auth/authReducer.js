import { combineReducers } from 'redux';

import types from './authActionTypes';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.AUTH_SUCCESS:
    case types.GET_CURRENT_USER_SUCCESS:
      return payload.user;

    case types.AUTH_ERROR:
    case types.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};
const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.AUTH_SUCCESS:
      return payload.token;

    case types.AUTH_ERROR:
    case types.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type }) => {
  switch (type) {
    case types.AUTH_SUCCESS:
    case types.GET_CURRENT_USER_SUCCESS:
      return true;

    case types.AUTH_ERROR:
    case types.SIGN_OUT_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  isAuthenticated,
});
