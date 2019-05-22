import React from 'react';
import UserNav from '../components/UserNav/UserNav';
import userNavItems from '../configs/user-nav';

const MainPage = () => {
  return (
    <div>
      <UserNav items={userNavItems} />
    </div>
  );
};

export default MainPage;
