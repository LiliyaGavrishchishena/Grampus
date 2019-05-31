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

// const setCurrentUser = user => ({
//   type: types.SET_CURRENT_USER,
//   payload: { user },
// });

// const setCurrentUser = decoded => ({
//   type: types.SET_CURRENT_USER,
//   payload: { decoded },
// });

const setCurrentUserRequest = () => ({
  type: types.SET_CURRENT_USER_REQUEST,
});

const setCurrentUserSuccess = data => ({
  type: types.SET_CURRENT_USER_SUCCESS,
  payload: { data },
});

const setCurrentUserError = error => ({
  type: types.SET_CURRENT_USER_ERROR,
  payload: {
    error,
  },
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
  setCurrentUserSuccess,
  setCurrentUserRequest,
  setCurrentUserError,
};
