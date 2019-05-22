import React from 'react';
import UserNav from '../UserNav/UserNav';
import userNavItems from '../../configs/user-nav';

const Profile = () => {
  return (
    <div>
      <UserNav items={userNavItems} />
    </div>
  );
};

export default Profile;
