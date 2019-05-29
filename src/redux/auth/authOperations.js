import axios from 'axios';
// actions
import actions from './authActions';
// selectors
import authSelectors from './authSelectors';

const setBaseURL = () => {
  axios.defaults.baseURL = 'http://10.11.1.40:8080';
};

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = token;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

const signUp = credentials => dispatch => {
  dispatch(actions.authRequest());
  setBaseURL();
  axios
    .post('/api/users/register', credentials)
    .then(({ data }) => {
      console.log(data);
      setAuthHeader(data.token);
      dispatch(actions.authSuccess(data));
    })
    .catch(error => dispatch(actions.authError(error)));
};

const signIn = credentials => dispatch => {
  dispatch(actions.authRequest());
  setBaseURL();
  axios
    .post('/api/users/login', credentials)
    .then(({ data }) => {
      console.log(data);
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
    .post('/api/users/signout', {}, config)
    .then(() => dispatch(actions.signOutSuccess()));
};

const getCurrentUser = () => (dispatch, getState) => {
  const token = authSelectors.getToken(getState());

  if (!token) return;

  setAuthHeader(token);

  dispatch(actions.getCurrentUserRequest());
  setBaseURL();
  axios
    .get('/api/users/register')
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
