import React from 'react';
import { connect } from 'react-redux';
// components
import UserNav from '../UserNav/UserNav';
import SignInPage from '../../pages/SignInPage';
// configs
import userNavItems from '../../configs/user-nav';
import authSelectors from '../../redux/auth/authSelectors';
import authOperation from '../../redux/auth/authOperations';

const Profile = ({ isAuthenticated, user, exit }) => (
  <div>
    {isAuthenticated ? (
      <UserNav items={userNavItems} signOut={exit} user={user} />
    ) : (
      <SignInPage />
    )}
  </div>
);

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  exit: authOperation.signOut,
};
const options = { pure: false };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  options,
)(Profile);
