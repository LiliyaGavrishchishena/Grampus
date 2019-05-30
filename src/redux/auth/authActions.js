import types from './authActionTypes';

const signUpRequest = () => ({
  type: types.SIGNUP_REQUEST,
});

const signUpSuccess = data => ({
  type: types.SIGNUP_SUCCESS,
  payload: data,
});

const signUpError = error => ({
  type: types.SIGNUP_ERROR,
  payload: {
    error,
  },
});
const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

const loginSuccess = data => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});

const loginError = error => ({
  type: types.LOGIN_ERROR,
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
  signUpRequest,
  signUpSuccess,
  signUpError,
  loginRequest,
  loginSuccess,
  loginError,
  signOutRequest,
  signOutSuccess,
  getCurrentUserSuccess,
  getCurrentUserRequest,
};
