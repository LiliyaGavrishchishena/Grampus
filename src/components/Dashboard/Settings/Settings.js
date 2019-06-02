import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../../../redux/auth';

const Settings = ({ signOut }) => {
  return (
    <div>
      <button onClick={signOut}>LogOut</button>
    </div>
  );
};

const mapDispatchToProps = {
  signOut: authActions.signOut,
};

export default connect(
  null,
  mapDispatchToProps,
)(Settings);
