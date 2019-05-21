const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUser = state => state.auth.user;
const getToken = state => state.auth.token;

export default { getIsAuthenticated, getUser, getToken };
