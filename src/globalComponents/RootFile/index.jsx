import React from 'react';
import HederComponets from '../../commonLayout/header';
import { Outlet } from 'react-router';

const RooteFile = () => {
  return (
    <div>
      <HederComponets></HederComponets>
      <Outlet></Outlet>
    </div>
  );
};

export default RooteFile;
