import axios from 'axios';

import jwtDecode from 'jwt-decode';
import setJWTToken from '../../securityUtils/setJWTToken';
// actions
import actions from './authActions';
// selectors
import authSelectors from './authSelectors';

const setBaseURL = () => {
  axios.defaults.baseURL = 'http://10.11.1.83:8080';
  // axios.defaults.baseURL = 'http://localhost:8080';
};

const signUp = credentials => dispatch => {
  dispatch(actions.signUpRequest());
  setBaseURL();
  axios
    .post('/api/users/register', credentials)
    .then(({ data }) => {
      console.log(data);
      dispatch(actions.signUpSuccess(data));
    })
    .catch(error => dispatch(actions.signUpError(error)));
};

const signIn = credentials => dispatch => {
  dispatch(actions.loginRequest());
  setBaseURL();
  axios
    .post('/api/users/login', credentials)
    .then(({ data }) => {
      console.log(data);
      setJWTToken(data.token);
      const decoded = jwtDecode(data.token);
      dispatch(actions.loginSuccess(data));
      console.log(decoded);
    })
    .catch(error => dispatch(actions.loginError(error)));
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

// const getCurrentUser = () => (dispatch, getState) => {
//   const token = authSelectors.getToken(getState());

//   if (!token) return;

//   setJWTToken(token);

//   dispatch(actions.getCurrentUserRequest());
//   setBaseURL();
//   axios
//     .get('/api/users/register')
//     .then(({ data }) => {
//       setJWTToken(token);
//       return dispatch(actions.getCurrentUserSuccess(data.user));
//     })
//     .catch(error => {
//       setJWTToken();
//       console.log('Error while refreshing: ', error);
//     });
// };

export default {
  signUp,
  signIn,
  signOut,
  // getCurrentUser,
};
