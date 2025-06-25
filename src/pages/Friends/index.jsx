import React from 'react';
import ProfileBanner from '../../globalComponents/profileBanner';
import AllFriends from './components/allFriends';

const Fridends = () => {
  return (
    <div>
      <div>
        <ProfileBanner></ProfileBanner>
        <AllFriends></AllFriends>
      </div>
    </div>
  );
};

export default Fridends;
