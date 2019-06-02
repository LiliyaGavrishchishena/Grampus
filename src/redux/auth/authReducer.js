import { combineReducers } from 'redux';
// actionTypes
import types from './authActionTypes';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.SIGNUP_SUCCESS:
    case types.SET_CURRENT_USER_SUCCESS:
      return payload;

    case types.SIGNUP_ERROR:
    case types.SIGN_OUT:
      return null;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return payload.token ? payload.token : state;

    case types.LOGIN_ERROR:
    case types.SIGN_OUT:
      return null;

    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
    case types.SET_CURRENT_USER_SUCCESS:
      return true;

    case types.LOGIN_ERROR:
    case types.SIGN_OUT:
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
