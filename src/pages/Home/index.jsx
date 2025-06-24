import React from 'react';

import { Outlet } from 'react-router';
import UserProfile from '../../globalComponents/globalProfile';
import AllUserPhoto from '../../globalComponents/allUserPhoto';

const PublicProfile = () => {
  return (
    <div>
      <div className="flex justify-between">
        <UserProfile></UserProfile>
        <Outlet></Outlet>
        <AllUserPhoto></AllUserPhoto>
      </div>
    </div>
  );
};

export default PublicProfile;
