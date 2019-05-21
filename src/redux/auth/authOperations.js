import axios from 'axios';

import actions from './authActions';

import authSelectors from './authSelectors';

const setBaseURL = () => {
  axios.defaults.baseURL = 'http://localhost:4040';
};

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

const signUp = credentials => dispatch => {
  dispatch(actions.authRequest());
  setBaseURL();
  axios
    .post('/auth/signup', credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(actions.authSuccess(data));
    })
    .catch(error => dispatch(actions.authError(error)));
};

const signIn = credentials => dispatch => {
  dispatch(actions.authRequest());
  setBaseURL();
  axios
    .post('/auth/signin', credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(actions.authSuccess(data));
    })
    .catch(error => dispatch(actions.authError(error)));
};

const signOut = () => (dispatch, getState) => {
  dispatch(actions.signOutRequest());

  const token = authSelectors.getToken(getState());

  const config = {
    headers: {
      Authorization: token,
    },
  };
  setBaseURL();
  axios
    .post('/auth/signout', {}, config)
    .then(() => dispatch(actions.signOutSuccess()));
};

const getCurrentUser = () => (dispatch, getState) => {
  const token = authSelectors.getToken(getState());

  if (!token) return;

  setAuthHeader(token);

  dispatch(actions.getCurrentUserRequest());
  setBaseURL();
  axios
    .get('/auth/current')
    .then(({ data }) => {
      setAuthHeader(token);
      return dispatch(actions.getCurrentUserSuccess(data.user));
    })
    .catch(error => {
      clearAuthHeader();
      console.log('Error while refreshing: ', error);
    });
};
export default {
  signUp,
  signIn,
  signOut,
  getCurrentUser,
};
