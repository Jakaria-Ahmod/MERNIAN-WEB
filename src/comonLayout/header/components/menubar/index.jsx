import React from 'react';
// import MenuBarLayoutLeft from './menubarLayout/MenuBarLayoutLeft.jsx';
import MenuBarLayoutRight from './menubarLayout/MenuBarLayoutRight';
import MenuBarLayoutLeft from './menubar/menubarLayout/MenuBarLayoutLeft';

const Menubar = () => {
  return (
    <div className="w-[33%]">
      <div className="flex gap-x-[117px] items-center">
        <MenuBarLayoutLeft></MenuBarLayoutLeft>
        <MenuBarLayoutRight></MenuBarLayoutRight>
      </div>
    </div>
  );
};

export default Menubar;
