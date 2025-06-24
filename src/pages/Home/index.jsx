import React from 'react';
import UserProfile from '../../globalComponents/globalProfile';
import AllUserPhoto from '../../globalComponents/allUserPhoto';
import { Outlet } from 'react-router';

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
