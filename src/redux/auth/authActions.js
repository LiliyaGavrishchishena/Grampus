import types from './authActionTypes';

const authRequest = () => ({
  type: types.AUTH_REQUEST,
});

const authSuccess = data => ({
  type: types.AUTH_SUCCESS,
  payload: data,
});

const authError = error => ({
  type: types.AUTH_ERROR,
  payload: {
    error,
  },
});

const signOutRequest = () => ({
  type: types.SIGN_OUT_REQUEST,
});

const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS,
});

const getCurrentUserSuccess = user => ({
  type: types.GET_CURRENT_USER_SUCCESS,
  payload: { user },
});

const getCurrentUserRequest = () => ({
  type: types.GET_CURRENT_USER_REQUEST,
});

export default {
  authRequest,
  authSuccess,
  authError,
  signOutRequest,
  signOutSuccess,
  getCurrentUserSuccess,
  getCurrentUserRequest,
};
