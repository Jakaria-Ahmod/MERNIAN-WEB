import React from 'react';

import { Outlet } from 'react-router';
import UserProfile from '../../globalComponents/globalProfile';
import AllUserPhoto from '../../globalComponents/allUserPhoto';
import HomePage from './Main';

const PublicProfile = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[300px]">
          <UserProfile></UserProfile>
        </div>
        <Outlet></Outlet>
        <div className="w-[80px]">
          <AllUserPhoto></AllUserPhoto>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
